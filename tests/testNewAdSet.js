const { NewCampaign, CampaignName, CampaignNextBackStep } = require('./../tests/testNewCampaign');
const { globalSelectors } = require('./constants/constants');

async function testNewAdSet(page) {
    await NewCampaign(page, globalSelectors);
    await CampaignName(page, globalSelectors);
    await CampaignNextBackStep(page, globalSelectors);
    await page.waitFor(2000);

    await page.waitForSelector(globalSelectors.CAMPAIGN_4STEP_ADSET_SELECTOR);
    await page.click(globalSelectors.CAMPAIGN_4STEP_ADSET_SELECTOR);
    await page.waitForSelector(globalSelectors.CAMPAIGN_4STEP_NEW_ADSET_BUTTON_SELECTOR);
    await page.click(globalSelectors.CAMPAIGN_4STEP_NEW_ADSET_BUTTON_SELECTOR);
    // await page.waitFor(2000);

    // await page.waitForSelector(globalSelectors.NOTDISABLED_SELECTOR);
    console.log('0')
    await page.waitFor(50000);
    console.log('1')
    await page.click(globalSelectors.NEXTSTEP_BUTTON_SELECTOR);
    console.log('2')
    await page.waitFor(5000)

    const idStatus = {
        active: 1,
        inactive: 0,
    }['active']
}
module.exports = {
    testNewAdSet
};

