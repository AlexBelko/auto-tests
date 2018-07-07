// const path = require('path');
// const fs = require('fs');

// const { url } = require('./../creds');
// async function testUploadImage(page) {
//   const UPLOAD_BUTTON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > compose:nth-child(4) > ct-form-group:nth-child(1) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > ct-image-upload > div > div > div.ct-image-upload__message > div > label > span'
//   const errorFunction = (errorMessage) => { throw Error(errorMessage) };
//   page.on('pageerror', errorFunction);
//   await page.goto(url + '/#/app/display-creative/create');
//   const files = fs.readdirSync(path.join(process.cwd(), './assets/docs/'));
//   console.log('files', files[0])
//   await page.waitForSelector(UPLOAD_BUTTON_SELECTOR);

//   const input = await page.$('input[type=file]');
//   await input.uploadFile(files[0]);

//   await page.waitFor(10000);
//   page.removeListener('pageerror', errorFunction);
// }

// module.exports = {
//     testUploadImage
// };
