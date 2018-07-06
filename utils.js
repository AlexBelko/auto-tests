
async function getInnerHtmlText(page, selector) {
  return await page.evaluate(selector => {
    const selectedObject = document.querySelector(selector);
    if (selectedObject !== null) {
      return selectedObject.innerHTML;
    }
  }, selector);
}

module.exports = {
    getInnerHtmlText,
};
