const puppeteer = require('puppeteer');
const { getInnerHtmlText } = require('./utils');
const { url } = require('./creds');

// Import tests
const { testLogin } = require('./tests/testLogin');


(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(url);

  try {
    // Paste test here
    await testLogin(page);
  } catch (err) {
    console.error('-----');
    console.error(err);
    console.error('-----');
    await page.screenshot({ path: 'error.png' })
  }

  await browser.close();
})();
