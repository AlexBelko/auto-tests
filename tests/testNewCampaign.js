
const { waitForResponseOk, waitForCheckBoxStatus, getFromInside, getFromInsideInput } = require('./../utils');
const { globalSelectors } = require('./constants/constants');

async function testNewCampaign(page) {
   
    

    await NewCampaign(page, globalSelectors);
    await CampaignName(page, globalSelectors);
    await CampaignNextBackStep(page, globalSelectors);
    
    await waitForCheckBoxStatus(page, globalSelectors.STATUSRADIOBUTTON_ON_SELECTOR + ' > input', true);
    await waitForCheckBoxStatus(page, globalSelectors.DAILYSPEND_CHECKBOX_SELECTOR, true);
    await waitForCheckBoxStatus(page, globalSelectors.FREQUENCYCAP_CHECKBOX_SELECTOR, true);
    await waitForCheckBoxStatus(page, globalSelectors.BUDGETFLIGHTS_SELECTOR, true);
  
    await RemoveCampaign(page, globalSelectors);

    await NewCampaign(page, globalSelectors);
    await page.waitForSelector(globalSelectors.STATUSRADIOBUTTON_OF_SELECTOR);
    await page.click(globalSelectors.STATUSRADIOBUTTON_OF_SELECTOR);
    await page.click(globalSelectors.ADVERTISER_SELECTOR);
    await page.click(globalSelectors.ADVERTISER_NAME_SELECTOR);
    await CampaignName(page, globalSelectors);
    await DailySpend(page, globalSelectors);
    await FrequencyCap(page, globalSelectors);
    await page.click(globalSelectors.PHASE_TEST_SELECTOR);
    await CustomBudget(page, globalSelectors);
    await CampaignNextBackStep(page, globalSelectors);
    await page.waitFor(3000);


    await page.waitForSelector(globalSelectors.NOTDISABLED_SELECTOR);
    await waitForCheckBoxStatus(page, globalSelectors.STATUSRADIOBUTTON_OF_SELECTOR + ' > input', true);

    await waitForCheckBoxStatus(page, globalSelectors.DAILYSPEND_CHECKBOX_SELECTOR, false);
    const selectedDailySpendValue = await getFromInsideInput(page, globalSelectors.DAILYSPEND_INPUT_SELECTOR);
    if (selectedDailySpendValue !== 250) {
      throw new Error('DAILY SPEND MUST BE 250!!!!', selectedDailySpendValue)
    }
    
    await waitForCheckBoxStatus(page, globalSelectors.FREQUENCYCAP_CHECKBOX_SELECTOR, false);
    const selectedFrequencyPacingType = await getFromInside(page, globalSelectors.FREQUENCYCAP_PACINGTYPE_EVEN_SAVED_SELECTOR);
    if (selectedFrequencyPacingType !== 'Even') {
      throw new Error('WTF MUST BE EVEN!!!!', selectedFrequencyPacingType)
    }
    const selectedFrequencyCapValue = await getFromInsideInput(page, globalSelectors.FREQUENCYCAP_SELECTOR);
    if (selectedFrequencyCapValue !== 10) {
      throw new Error('FREQUENCY CAP MUST BE 10!!!!', selectedFrequencyCapValue)
    }
    const selectedFrequencyPeriod = await getFromInside(page, globalSelectors.FREQUENCYCAP_PERIOD_WEEK_SELECTOR);
    if (selectedFrequencyPeriod !== 'Week') {
      throw new Error('PERIOD MUST BE WEEK!!!!', selectedFrequencyPeriod)
    }

    await waitForCheckBoxStatus(page, globalSelectors.PHASE_TEST_SELECTOR + ' > input', true);

    await waitForCheckBoxStatus(page, globalSelectors.UNLIMITED_BUDGET_SELECTOR, false);

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
  // await page.waitFor(8000);
  await page.waitForSelector(selectors.NOTDISABLED_SELECTOR_2);
  // await waitForResponseOk(page, 'https://beta.api.adx1.com/v1.0.2/campaigns');
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

async function CustomBudget(page, selectors = {}) {
  await page.evaluate(() => {
    document.querySelector('ct-form-group:nth-child(11) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input').click();
  }); // использую вместо await page.click(selectors.UNLIMITED_BUDGET_SELECTOR), т.к. встроенная функция не срабатывает, причина не ясна
  await page.waitForSelector(selectors.BUDGET_IMPUT_SELECTOR);
  await page.click(selectors.BUDGET_IMPUT_SELECTOR);
  await page.keyboard.down('Shift');
  await page.keyboard.press('Home');
  await page.keyboard.up('Shift');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('26');
  await page.click(selectors.NEW_FLIGHT_BUTTON_SELECTOR);
}

module.exports = {
    testNewCampaign, NewCampaign, CampaignName, CampaignNextBackStep
};
