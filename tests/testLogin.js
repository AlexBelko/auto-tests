
const { username, password } = require('./../creds');

async function testLogin(page) {
    const USERNAME_SELECTOR = '#inputEmail';
    const PASSWORD_SELECTOR = '#inputPassword';
    const LOGIN_BUTTON_SELECTOR =
      'body > div.grid > form > div.vm-form-signin-body > div > ct-row > ct-col:nth-child(1) > button';
    const FILTER_SELECTOR =
      'body > div.lt-f-col.main-app-wrapper.au-target > div > div.ct-toolbar > div > ct-toolbar-toggler > button';
    const ERROR_TOAST_SELECTOR = '#toast-container';

    await page.waitForSelector(USERNAME_SELECTOR);

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(username);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(password);

    await page.click(LOGIN_BUTTON_SELECTOR);

    if (await page.waitForSelector(ERROR_TOAST_SELECTOR, { timeout: 3000 })) {
      throw Error('Error in login');
    }

    await page.waitForSelector(FILTER_SELECTOR);
  }

module.exports = {
    testLogin
};