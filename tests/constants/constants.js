const globalSelectors = {
    // константы кампаний:
    // PHASE_RADIOBUTTON_SELECTOR: 'ct-form-group:nth-child(10) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label > span',
    DAILYSPEND_CHECKBOX_SELECTOR : 'ct-form-group:nth-child(6) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input',
    BUDGETFLIGHTS_SELECTOR : 'ct-form-group:nth-child(11) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input',
    STATUSRADIOBUTTON_ON_SELECTOR : 'ct-form-group:nth-child(2) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label',
    FREQUENCYCAP_CHECKBOX_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div > label > ct-checkbox > label > input',
    STATUSRADIOBUTTON_OF_SELECTOR : 'ct-form-group:nth-child(2) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(2) > label',
  // FREQUENCYCAP_CHECKBOX_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div > label > ct-checkbox > label > input',
  // FREQUENCYCAP_PACINGTYPE_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target',
    FREQUENCYCAP_PACINGTYPE_EVEN_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.au-target.tagger-editable-block > div.tagger-options.fxVr > div.tagger-options-list.options-container.au-target > div:nth-child(2)',
    FREQUENCYCAP_PACINGTYPE_EVEN_SAVED_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(1) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target > div.ct-f-1.tagger-selected__tags.ct-f-row-center.au-target > span',
    FREQUENCYCAP_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(2) > ct-number > div > input',
    FREQUENCYCAP_PERIOD_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(4) > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target',
    FREQUENCYCAP_PERIOD_WEEK_SELECTOR : 'ct-form-group:nth-child(7) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > dsp-frequency-spend > div > div.lt-f-row.lt-f-col-center > div:nth-child(4) > ct-select > div > div.au-target.tagger-editable-block > div.tagger-options.fxVr > div.tagger-options-list.options-container.au-target > div:nth-child(3)',
    CAMPAIGNNAME_INPUT_SELECTOR : 'ct-form-group:nth-child(4) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > input',
    DAILYSPEND_INPUT_SELECTOR : '#input',
    NEWCAMPAIGN_BUTTON_SELECTOR : 'body > div.lt-f-col.main-app-wrapper.au-target > div > div.ct-toolbar > div > div:nth-child(2) > a > span',
    NOTDISABLED_SELECTOR : 'div.au-target.fieldset:not(.disabled)',
    NOTDISABLED_SELECTOR_2 : 'body > div.lt-f-col.main-app-wrapper.au-target > div > ct-form > form > div:not(.disabled)',
    NEXTSTEP_BUTTON_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-primary.au-target',
    BACKSTEP_BUTTON_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-secondary.m-r-sm.au-target',
    REMOVECAMPAIGN_BUTTON_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-1.lt-f-self-start.p-t-s.m-l-sm > ct-button-confirm > div > button',
    REMOVECONFIRM_BUTTON_SELECTOR : '#modal-container > pr-dialog > div > div > div > pr-dialog-footer > div > button.btn.btn-primary.au-target',
    PHASE_TEST_SELECTOR : 'ct-form-group:nth-child(10) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(2) > label',
    UNLIMITED_BUDGET_SELECTOR : 'ct-form-group:nth-child(11) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-checkbox > label > input',
    BUDGET_IMPUT_SELECTOR : 'ct-form > form > div > div > dsp-budget-flights > ct-table > div > div.ct-tbody.au-target > div.ct-row.actualRecord.au-target > div:nth-child(4) > ct-price > div',
    NEW_FLIGHT_BUTTON_SELECTOR : 'ct-form > form > div > div > dsp-budget-flights > div > div:nth-child(1) > button > span',
    ADVERTISER_SELECTOR : 'ct-form-group:nth-child(3) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > ct-row > ct-col > fieldset > ct-select > div > div.fxFit.fxHr.tagger-non-editable-block.au-target',
    ADVERTISER_NAME_SELECTOR : 'ct-form-group:nth-child(3) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > ct-row > ct-col > fieldset > ct-select > div > div.au-target.tagger-editable-block > div.tagger-options.fxVr > div.tagger-options-list.options-container.au-target > div:nth-child(4)',
    
    //константы стратегий:
    CAMPAIGN_4STEP_ADSET_SELECTOR : 'ct-form-steps > ul > li:nth-child(4) > a',
    CAMPAIGN_4STEP_NEW_ADSET_BUTTON_SELECTOR : `ct-form > form > div > div > div.ct-toolbar > div:nth-child(1) > div:nth-child(1) > a > span`,
    ADSET_ACTIVE_RADIOBUTTON_SELECTOR : 'ct-form > form > div > ct-form-group:nth-child(2) > fieldset > div > div.lt-f-3.lt-f-col.form-group-error > div > ct-radio-group > ct-radio:nth-child(1) > label > span',
    ADSET_NEXT_STEP_SELECTOR : 'ct-form-footer > div > div:nth-child(2) > div.lt-f-3.lt-f-self-end.lt-f-col > div > div > a.btn.btn-primary.au-target',



  }

module.exports = {
    globalSelectors
};