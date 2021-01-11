// const scraperObject = {
//   url: 'http://books.toscrape.com',
//   async scraper(browser){
//       let page = await browser.newPage();
//       console.log(`Navigating to ${this.url}...`);
//       // Input된 URL로 진입함.
//       await page.goto(this.url);
//       // div에 있는 모든 정보가 DOM에 렌더링 되기를 기다림.
//       await page.waitForSelector('.page_inner');
//       // section ol li selector를 따라서 $$eval 함수가 url을 scraping함. (string / number type만 도출함.)
//       let urls = await page.$$eval('section ol > li', links => {
//           // .instock.availability 를 체크해서 내용이 In stock이 아닌 경우를 필터링하여 제외함.
//           links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
//           // h3 a selector를 따라서 href를 추출함.
//           links = links.map(el => el.querySelector('h3 > a').href)
//           return links;
//       });

//       // 링크를 따라 들어가서 그 링크마다 필요한 정보를 가지고 그 링크는 닫는 것 반복하는 loop
//       let pagePromise = (link) => new Promise(async(resolve, reject) => {
//         let dataObj = {};
//         let newPage = await browser.newPage();
//         await newPage.goto(link);
//         dataObj['bookTitle'] = await newPage.$eval('.product_main > h1', text => text.textContent);
//         dataObj['bookPrice'] = await newPage.$eval('.price_color', text => text.textContent);
//         dataObj['noAvailable'] = await newPage.$eval('.instock.availability', text => {
//             // Strip new line and tab spaces
//             text = text.textContent.replace(/(\r\n\t|\n|\r|\t)/gm, "");
//             // Get the number of stock available
//             let regexp = /^.*\((.*)\).*$/i;
//             let stockAvailable = regexp.exec(text)[1].split(' ')[0];
//             return stockAvailable;
//         });
//         dataObj['imageUrl'] = await newPage.$eval('#product_gallery img', img => img.src);
//         dataObj['bookDescription'] = await newPage.$eval('#product_description', div => div.nextSibling.nextSibling.textContent);
//         dataObj['upc'] = await newPage.$eval('.table.table-striped > tbody > tr > td', table => table.textContent);
//         resolve(dataObj);
//         await newPage.close();
//     });

//     for(link in urls){
//         let currentPageData = await pagePromise(urls[link]);
//         // scrapedData.push(currentPageData);
//         console.log(currentPageData);
//     }

//   }
// }

// module.exports = scraperObject;

const scraperObject = {
  url: 'https://www.mangoplate.com/restaurants/MC4PiytWqc',
  async scraper(browser){
      let page = await browser.newPage();
      console.log(`Navigating to ${this.url}...`);
      // Navigate to the selected page
      await page.goto(this.url);
      // Wait for the required DOM to be rendered
      await page.waitForSelector('.contents');
      // Get the link to all the required books
      const list = document.getElementsByClassName('rate-point');
      };
      console.log(rate);
  }


module.exports = scraperObject;