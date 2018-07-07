
const { waitForResponseOk } = require('./../utils');

async function testNewCampaign(page) {
    const NEWCAMPAIGN_BUTTON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > div.ct-toolbar > div > div:nth-child(2) > a > span';
    // const PHASE_RADIOBUTTON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-group:nth-child(10) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label > span';
    const NOTDISABLED_SELECTOR = 'div.au-target.fieldset:not(.disabled)';
    const NEXTSTEP_BUTTON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-primary.au-target';
    const CAMPAIGNNAME_INPUT_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-group:nth-child(4) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > input';
    const BACKSTEP_BUTTON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-secondary.m-r-sm.au-target';
    const DAILYSPEND_CHECKBOX_ON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-group:nth-child(6) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input';
    const FREQUENCYCAP_CHECKBOX_ON_SELECTOR = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div > label > ct-checkbox > label';

    
    


    // const ERROR_TOAST_SELECTOR = '#toast-container';

    await page.waitForSelector(NEWCAMPAIGN_BUTTON_SELECTOR);

    await page.click(NEWCAMPAIGN_BUTTON_SELECTOR);

    await page.waitForSelector(NOTDISABLED_SELECTOR);

    await page.click(CAMPAIGNNAME_INPUT_SELECTOR);
    await page.keyboard.down('Shift');
    await page.keyboard.press('Home');
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Auto_test_campaign');

    await page.click(NEXTSTEP_BUTTON_SELECTOR);

    await waitForResponseOk(page, 'https://beta.api.adx1.com/v1.0.2/campaigns');
    
    await page.click(BACKSTEP_BUTTON_SELECTOR);

    await page.waitForSelector(DAILYSPEND_CHECKBOX_ON_SELECTOR);
    await page.waitForSelector(FREQUENCYCAP_CHECKBOX_ON_SELECTOR);


}

  //   try {
  //     await page.waitForSelector(ERROR_TOAST_SELECTOR, { timeout: 3000 });
  //     throw Error('Error in login');
  //   } catch (error) {
      
  //   }
  //   await page.waitForSelector(FILTER_SELECTOR);
  // }

module.exports = {
    testNewCampaign
};
