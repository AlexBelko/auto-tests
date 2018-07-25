const { NewCampaign, CampaignName, CampaignNextBackStep } = require('./../tests/testNewCampaign');
const { hardClick, waitForOpenNewPage } = require('./../utils');
const { globalSelectors } = require('./constants/constants');

async function testNewAdSet(page, browser) {
    await NewCampaign(page, globalSelectors);
    await CampaignName(page, globalSelectors);
    await CampaignNextBackStep(page, globalSelectors);
    await page.waitFor(2000);

    await page.waitForSelector(globalSelectors.CAMPAIGN_4STEP_ADSET_SELECTOR);
    await page.click(globalSelectors.CAMPAIGN_4STEP_ADSET_SELECTOR);
    await page.waitForSelector(globalSelectors.CAMPAIGN_4STEP_NEW_ADSET_BUTTON_SELECTOR);

    const newPagePromise = getNewPageWhenLoaded();
    await page.click(globalSelectors.CAMPAIGN_4STEP_NEW_ADSET_BUTTON_SELECTOR);
    const newPage = await newPagePromise;

    await newPage.waitForSelector(globalSelectors.NEXTSTEP_BUTTON_SELECTOR);
    hardClick(newPage, globalSelectors.NEXTSTEP_BUTTON_SELECTOR);
    await newPage.waitFor(50000);
}
module.exports = {
    testNewAdSet
};

