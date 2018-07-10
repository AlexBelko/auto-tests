
const { waitForResponseOk, waitForCheckBoxStatus, getFromInside } = require('./../utils');

async function testNewCampaign(page) {
    const globalSelectors = {
      // PHASE_RADIOBUTTON_SELECTOR: 'ct-form-group:nth-child(10) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label > span',
      DAILYSPEND_CHECKBOX_SELECTOR : 'ct-form-group:nth-child(6) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input',
      BUDGETFLIGHTS_SELECTOR : 'ct-form-group:nth-child(11) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input',
      STATUSRADIOBUTTON_ON_SELECTOR : 'ct-form-group:nth-child(2) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label > input',
      FREQUENCYCAP_CHECKBOX_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div > label > ct-checkbox > label > input',
      STATUSRADIOBUTTON_OF_SELECTOR : 'ct-form-group:nth-child(2) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(2) > label',
   // FREQUENCYCAP_CHECKBOX_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div > label > ct-checkbox > label > input',
   // FREQUENCYCAP_PACINGTYPE_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target',
      FREQUENCYCAP_PACINGTYPE_EVEN_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.au-target.tagger-editable-block > div.tagger-options.fxVr > div.tagger-options-list.options-container.au-target > div:nth-child(2)',
      FREQUENCYCAP_PACINGTYPE_EVEN_SAVED_SELECTOR : 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target > div.ct-f-1.tagger-selected__tags.ct-f-row-center.au-target > span',
      FREQUENCYCAP_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(2) > ct-number > div > input',
      FREQUENCYCAP_PERIOD_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(4) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target',
      FREQUENCYCAP_PERIOD_WEEK_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(4) > ct-select > div > div.au-target.tagger-editable-block > div.tagger-options.fxVr > div.tagger-options-list.options-container.au-target > div:nth-child(3)',
      CAMPAIGNNAME_INPUT_SELECTOR : 'ct-form-group:nth-child(4) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > input',
      DAILYSPEND_INPUT_SELECTOR : '#input',
      NEWCAMPAIGN_BUTTON_SELECTOR : 'body > div.lt-f-col.main-app-wrapper.au-target > div > div.ct-toolbar > div > div:nth-child(2) > a > span',
      NOTDISABLED_SELECTOR : 'div.au-target.fieldset:not(.disabled)',
      NEXTSTEP_BUTTON_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-primary.au-target',
      BACKSTEP_BUTTON_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-secondary.m-r-sm.au-target',
      REMOVECAMPAIGN_BUTTON_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-1.lt-f-self-start.p-t-s.m-l-sm > ct-button-confirm > div > button',
      REMOVECONFIRM_BUTTON_SELECTOR : '#modal-container > pr-dialog > div > div > div > pr-dialog-footer > div > button.btn.btn-primary.au-target',
    }
    



    // await NewCampaign(page, globalSelectors);
    // await CampaignName(page, globalSelectors);
    // await CampaignNextBackStep(page, globalSelectors);
    
    // await waitForCheckBoxStatus(page, globalSelectors.STATUSRADIOBUTTON_ON_SELECTOR, true);
    // await waitForCheckBoxStatus(page, globalSelectors.DAILYSPEND_CHECKBOX_SELECTOR, true);
    // await waitForCheckBoxStatus(page, globalSelectors.FREQUENCYCAP_CHECKBOX_SELECTOR, true);
    // await waitForCheckBoxStatus(page, globalSelectors.BUDGETFLIGHTS_SELECTOR, true);
    
    // await RemoveCampaign(page, globalSelectors);

    await NewCampaign(page, globalSelectors);
    await page.waitForSelector(globalSelectors.STATUSRADIOBUTTON_OF_SELECTOR);
    await page.click(globalSelectors.STATUSRADIOBUTTON_OF_SELECTOR);
    await CampaignName(page, globalSelectors);
    await DailySpend(page, globalSelectors);
    await FrequencyCap(page, globalSelectors);
    await CampaignNextBackStep(page, globalSelectors);


    const selectedStatus = await getFromInside(page, globalSelectors.FREQUENCYCAP_PACINGTYPE_EVEN_SAVED_SELECTOR);
    console.log('test', selectedStatus)
    if (selectedStatus !== 'Even') {
      throw new Error('WTF MUST BE EVEN!!!!', selectedStatus)
    }
    await page.waitFor(2000);


    await RemoveCampaign(page, globalSelectors);




}

async function CampaignName(page, selectors = {}) {
  

  await page.click(selectors.CAMPAIGNNAME_INPUT_SELECTOR);
  await page.keyboard.down('Shift');
  await page.keyboard.press('Home');
  await page.keyboard.up('Shift');
  await page.keyboard.press('Backspace');
  return await page.keyboard.type('Auto_test_campaign');
}

async function DailySpend(page, selectors = {}) {
  

  await page.evaluate(() => {
    document.querySelector('ct-form-group:nth-child(6) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input').click();
  });

  await page.waitForSelector(selectors.DAILYSPEND_INPUT_SELECTOR);
  await page.click(selectors.DAILYSPEND_INPUT_SELECTOR);
  await page.keyboard.down('Shift');
  await page.keyboard.press('Home');
  await page.keyboard.up('Shift');
  await page.keyboard.press('Backspace');
  return await page.keyboard.type('250');

}

async function FrequencyCap(page, selectors = {}) {

  await page.evaluate(() => {
    document.querySelector('ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div > label > ct-checkbox > label > input').click();
  }); // использую вместо await page.click(FREQUENCYCAP_CHECKBOX_SELECTOR), т.к. встроенная функция не срабатывает, причина не ясна
  
  await page.evaluate(() => {
    document.querySelector('ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target').click();
  }); // использую вместо await page.click(FREQUENCYCAP_PACINGTYPE_SELECTOR), т.к. встроенная функция не срабатывает, причина не ясна
  await page.waitForSelector(selectors.FREQUENCYCAP_PACINGTYPE_EVEN_SELECTOR);
  await page.click(selectors.FREQUENCYCAP_PACINGTYPE_EVEN_SELECTOR);
  await page.click(selectors.FREQUENCYCAP_SELECTOR);
  await page.keyboard.down('Shift');
  await page.keyboard.press('Home');
  await page.keyboard.up('Shift');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('10');
  await page.click(selectors.FREQUENCYCAP_PERIOD_SELECTOR);
  await page.waitForSelector(selectors.FREQUENCYCAP_PERIOD_WEEK_SELECTOR);
  return await page.click(selectors.FREQUENCYCAP_PERIOD_WEEK_SELECTOR);
}

async function NewCampaign(page, selectors = {}) {
  
  await page.waitForSelector(selectors.NEWCAMPAIGN_BUTTON_SELECTOR);
  await page.click(selectors.NEWCAMPAIGN_BUTTON_SELECTOR);
  return await page.waitForSelector(selectors.NOTDISABLED_SELECTOR);
}

async function CampaignNextBackStep(page, selectors = {}) {
  
  await page.click(selectors.NEXTSTEP_BUTTON_SELECTOR);
  await page.waitFor(1000);
  await waitForResponseOk(page, 'https://beta.api.adx1.com/v1.0.2/campaigns');
  await page.waitFor(1000);
  return await page.click(selectors.BACKSTEP_BUTTON_SELECTOR);

}

async function RemoveCampaign(page, selectors = {}) {
 
  await page.waitFor(3000);
  await page.click(selectors.REMOVECAMPAIGN_BUTTON_SELECTOR);
  await page.waitForSelector(selectors.REMOVECONFIRM_BUTTON_SELECTOR);
  await page.click(selectors.REMOVECONFIRM_BUTTON_SELECTOR);
  return await page.waitFor(3000);
}

module.exports = {
    testNewCampaign
};
