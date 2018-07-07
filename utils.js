
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

module.exports = {
    getInnerHtmlText,
    waitForResponseOk
};
