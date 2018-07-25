const puppeteer = require('puppeteer');
const { getInnerHtmlText } = require('./utils');
const { url } = require('./creds');

// Import tests
const { testLogin } = require('./tests/testLogin');
// const { testUploadImage } = require('./tests/testUploadImage');
// const { testNewCampaign } = require('./tests/testNewCampaign');
const { testNewAdSet } = require('./tests/testNewAdSet');


(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    headless: false,
    slowMo: '50'
  });
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 720});
  await page.goto(url);

  try {
    // Paste test here
    page.on('error', (errorMessage) => { throw Error(errorMessage) });
    await testLogin(page);
    // await testNewCampaign(page);
    // await testUploadImage(page);
    await testNewAdSet(page, browser);
  } catch (err) {
    console.error('-----');
    console.error(err);
    console.error('-----');
    await page.screenshot({ path: 'error.png' })
  }

  await browser.close();
})();
