
const Promise = require('promise');

async function getInnerHtmlText(page, selector) {
  return await page.evaluate(selector => {
    const selectedObject = document.querySelector(selector);
    if (selectedObject !== null) {
      return selectedObject.innerHTML;
    }
  }, selector);
}

async function waitForResponseOk(page, url) {
  return new Promise((resolve, reject) => {
    const responseCallback = response => {
      const request = response.request();
      if (request.url() == url) {
        console.log(request.url())
        if (response.ok()) {
            page.removeListener('response', responseCallback)
            resolve();
          } else {
            page.removeListener('response', responseCallback)
            reject(Error('response not ok', resp));
        }
      }
    }

    page.on('response', responseCallback)
  })
}

async function waitForCheckBoxStatus(page, selector, status = true) {
  if (selector.slice(-5) !== 'input') {
    throw Error('checkBoxStatus(): Selector must be ended with "input"')
  }
  const fullSelector = `${selector}${status ? ':checked' : ':not(:checked)'}`;

  return page.waitForSelector(fullSelector);
}

async function getFromInside(page, selector) {
  await page.waitForSelector(selector);
  return await page.evaluate(el => el.innerHTML.replace('<!--anchor-->', ''), await page.$(selector));
}

async function getFromInsideInput(page, selector) {
  await page.waitForSelector(selector);
  return await page.evaluate(el => el.valueAsNumber, await page.$(selector));
}

async function hardClick(page, selector) {
  return await page.evaluate(el => {
    console.log('hardClick', el);
    el.click();
  }, await page.$(selector));
}

async function waitForOpenNewPage(browser) {
  return new Promise((x) => browser.once('targetcreated', async (target) => {
    const newPage = await target.page();
    const newPagePromise = new Promise(() => newPage.once('domcontentloaded', () => x(newPage)));
    const isPageLoaded = await newPage.evaluate(() => document.readyState);
    return isPageLoaded.match('complete|interactive') ? x(newPage) : newPagePromise;
}));
}

module.exports = {
    getInnerHtmlText,
    waitForResponseOk,
    waitForCheckBoxStatus,
    getFromInside,
    getFromInsideInput,
    hardClick,
    waitForOpenNewPage,
};
