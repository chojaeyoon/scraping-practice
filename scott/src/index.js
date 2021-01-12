const chromium = require("chrome-aws-lambda"); // chromium require
const qsParams = require("./qsParams"); // Parmeter require

async function getContent(page, qsInput) { 
  let startTime = new Date();
  let content = null;

  const qs = qsInput.qs;
  const dataType = qsInput.dataType; // qsInput's dataType
  const attrName = qsInput.attrName; // qsINput's attrName

  console.log(qs);

  try {
    // return specific attribute
    if (attrName != null) { //attribute가 존재한다면, array인 경우와 아닌 경우로 나누어서 해당 요소에 지정된 값을 반환한다. 
      if (dataType === "array") {
        content = await page.$$eval(
          qs,
          (elArray, attrName) => elArray.map((el) => el.getAttribute(attrName)),
          attrName
        );
      } else {
        content = await page.$eval(
          qs,
          (el, attrName) => el.getAttribute(attrName),
          attrName
        );
      }
    }
    // return text content
    else {
      if (dataType === "array") {
        content = await page.$$eval(qs, (elArray) =>
          elArray.map((el) => el.textContent)
        );
      } else {
        content = await page.$eval(qs, (el) => el.textContent);
      }
    }

    console.log(`Retrieved ${qs}: ${new Date() - startTime} ms`);
    // console.log(content);
  } catch (error) {
    if (error instanceof TimeoutError) {
      console.error(`Timed Out: ${qs}`);
    } else {
      console.error("ERROR while getting content");
      console.error(error);
      throw error;
    }
  } finally {
    return content;
  }
}

function getPromises(page, data, inputParams) {
  // console.log(inputParams);
  promiseArray = [];

  for (let column in inputParams) {
    console.log(column);
    qsInput = inputParams[column];

    const prom = getContent(page, qsInput).then((col) => (data[column] = col));
    promiseArray.push(prom);
  }
  return promiseArray;
}

function cleanData(content, rep = null) {
  if (content != null) {
    if (rep != null) {
      content = content.replace(rep[0], rep[1]);
    }

    content = content.trim(); // 문자열 양 끝의 공백을 제거함

    // content = content.replace(/\s*(\S)/, '$1')
    // content = content.replace(/(\S)\s*$/, '$1')
    content = content.replace(/\s+/g, " "); // 정규식
  }
  return content;
}

function getPlatform(url) {
  let platform;
  if (
    url.includes("google.com") |
    url.includes("goo.gl") |
    url.includes("google.co.kr") |
    url.includes("g.page")
  ) {
    platform = "google";
  } else if (url.includes("kakao.com")) {
    platform = "kakao";
  } else if (url.includes("mangoplate.com")) {
    platform = "mangoplate";
  } else if (url.includes("naver.com")) {
    platform = "naver";
  }
  return platform;
}

module.exports.getInfo = async (event, context) => {
  console.log(event);
  console.log(context);

  const totalStartTime = new Date();
  let startTime = new Date();

  let statusCode;
  let browser;
  let data = {};

  let queryParams;

  if (event.queryStringParameters != null) {
    queryParams = event.queryStringParameters;
  } else {
    queryParams = event;
  }

  console.log(queryParams);

  let url = queryParams.inputUrl;

  let elements;
  if (queryParams.elements != null) {
    elements = queryParams.elements.split(",");
  }

  console.log(`url = ${url}`);
  console.log(`elements = ${elements}`);

  const platform = getPlatform(url);
  console.log(`platform = ${platform}`);

  let inputParams = qsParams.qsParams[platform];

  if (elements != null) {
    let subset = Object.keys(inputParams)
      .filter((key) => elements.indexOf(key) >= 0)
      .reduce(
        (obj2, key) => Object.assign(obj2, { [key]: inputParams[key] }),
        {}
      );
    inputParams = subset;
  }

  let skipQuery = false;
  if (
    Object.keys(inputParams).length === 0 &&
    inputParams.constructor === Object
  ) {
    skipQuery = true;
  }

  try {
    let param_puppeteer = {
      executablePath: await chromium.executablePath,
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      headless: chromium.headless,
    };

    // param_puppeteer.args =  [
    //   '--no-sandbox',
    //   '--disable-setuid-sandbox',
    //   '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3803.0 Safari/537.36',
    //   '--lang=ko,en-US;q=0.9,en;q=0.8,ko-KR;q=0.7,la;q=0.6'
    // ]

    // param_puppeteer.slowMo = 10000;
    // param_puppeteer.devtools = true;

    console.log(`set params: ${new Date() - startTime} ms`);
    // console.log(param_puppeteer);

    startTime = new Date();
    // console.log('inside try block');
    browser = await chromium.puppeteer.launch(param_puppeteer);
    console.log("launching puppeteer");

    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    page.on("console", (consoleObj) => {
      console.log(consoleObj.text());

      // Set puppeteer browser error flags
      if (
        consoleObj.text() ===
        "Failed to load resource: the server responded with a status of 404 ()"
      ) {
        data.browserError = 404;
      } else if (consoleObj.text().includes("status of 403")) {
        data.browserError = 403;
      }
    });

    page.on("requestfailed", (request) => {
      console.log(
        `url: ${request.url()}, errText: ${
          request.failure().errorText
        }, method: ${request.method()}`
      );
    });
    // Catch console log errors
    page.on("pageerror", (err) => {
      console.log(`Page error: ${err.toString()}`);
    });

    // // Intercept requests for images and fonts

    if (skipQuery) {
      await page.setRequestInterception(true);
      page.on("request", (interceptedRequest) => {
        // const reqUrl = interceptedRequest.url().toLowerCase();
        const reqType = interceptedRequest.resourceType();

        // if (reqType === 'image' || reqType === 'font')
        if (reqType !== "document") interceptedRequest.abort();
        // console.log(reqUrl);
        else interceptedRequest.continue();
      });
    }

    data.platform = platform;
    data.addressOnly = 0;
    data.browserError = null;

    console.log("Going to URL");
    await page.goto(url).catch((error) => {
      console.log("ERROR while loading page");
      console.error(error);
      throw error;
    });
    data.fullUrl = page.url();

    console.log(`Loaded new page: ${new Date() - startTime} ms`);
    startTime = new Date();

    if (skipQuery) {
      console.log("Skipping queryselector...");
    } else {
      await page.waitForSelector(inputParams.title.qs, { timeout: 10000 });

      await Promise.all(getPromises(page, data, inputParams));
      console.log(`All promises resolved: : ${new Date() - startTime} ms`);

      // Clean data
      for (let column in inputParams) {
        const dataType = inputParams[column].dataType;
        const rep = inputParams[column].rep;

        if (dataType === "array" && data[column] != null) {
          data[column] = data[column].map((val) => {
            return cleanData(val, rep);
          });
        } else {
          data[column] = cleanData(data[column], rep);
        }
      }

      if (platform === "google" && data.addr === null) {
        data.addr = data.addrAlt || data.addrAlt2 || data.title || null;
      }
    }
    console.log(data);
    statusCode = 200;
  } catch (error) {
    console.error("Caught error");
    console.error(error);
    data.errMessage = error.stack;
    statusCode = 502;
    // throw error;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  console.log(`Finished: ${new Date() - totalStartTime} ms`);

  return {
    statusCode: statusCode,
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };
};