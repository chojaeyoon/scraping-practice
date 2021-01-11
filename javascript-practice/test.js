// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://www.google.com');
//   await page.screenshot({path: 'google.png'});

//   await browser.close();
// })();

// async function test() {
//   const browser = await puppeteer.launch({
//     headless:false
//   });
//   const page = await browser.newPage();
//   await page.goto('https://www.mangoplate.com',{
//     waitUntil : 'networkidle2'
//   });
//   const html = await page.content(); // 페이지의 전체 html을 string으로 변환
//   await browser.close();
//   return html;
// }

// Promise.all([test()])
//  .then(([result]) => console.log(result));

const puppeteer = require('puppeteer');

async () => {`
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.mangoplate.com/restaurants/MC4PiytWqc');
  const links = await page.evaluate(() => { return Array.from(document.querySelectorAll('.rate-point span')).map(span => (span.textContent))})
  await browser.close();
}