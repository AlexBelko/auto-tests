
function testDisplayCreative(page) {
  const ADS_TAB = 'body > div.lt-f-col.main-app-wrapper.au-target > dsp-header > div > div:nth-child(2) > div > nav > li.dsp-menu__item.au-target.active > a';
  const EDIT_BTN = '#creatives_\24 \7b params\2e tabName\7d > div > div.ct-tbody.au-target > div:nth-child(1) > div.ct-col.ct-actions-cell.text-center.ct-right.col-fx- > a:nth-child(2) > i';

  const AUDIO_RADIO_CHEKED = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > compose:nth-child(4) > ct-form-group:nth-child(4) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(2) > label > input:cheked'
  const AUDIO_RADIO_ON = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > compose:nth-child(4) > ct-form-group:nth-child(4) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label > input'
  const AUDIO_RADIO_OFF = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > compose:nth-child(4) > ct-form-group:nth-child(4) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(2) > label > input'
  const SAVE_BUTTON = 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div > ct-form-footer > div > div:nth-child(1) > div.lt-f-3.lt-f-col > div > button'
  const ID_SELECTOR = '#strategies > div > div.ct-tbody.au-target > div:nth-child(1) > div.au-target.ct-col.text-center.col-fx-1'
  let CREATIVE_ID = '';

  await page.click(ADS_TAB);
  await page.waitForSelector(EDIT_BTN);
  await page.click(EDIT_BTN);
  const isCheked = await page.$(AUDIO_RADIO_CHEKED);

  getInnerHtmlText(page, );

  if (isCheked) {
    await page.click(AUDIO_RADIO_ON);
  } else {
    await page.click(AUDIO_RADIO_OFF);
  }
  await page.click(SAVE_BUTTON);
  await page.waitForSelector(CHEKED);
}
