const puppeteer = require('puppeteer');
const { getInnerHtmlText } = require('./utils');

// Import tests
const { testLogin } = require('./tests/testLogin');


(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:9000/');

  try {
    await testLogin(page);
  } catch (err) {
    console.error('-----');
    console.error(err);
    console.error('-----');
    await page.screenshot({ path: 'error.png' })
  }
  // await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
