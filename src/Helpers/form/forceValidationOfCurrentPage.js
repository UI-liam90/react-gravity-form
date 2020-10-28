/**
 * Force validate current page fields
 * @param {number} page
 */

export default (page, formValues, setShowPageValidationMsg, setTouched) => {
  // check if current oage has required fields
  const isPageDisabled = page
    ? Object.keys(formValues).some(
      (x) =>
        formValues[x].pageNumber === page && !formValues[x].hideField && formValues[x].valid
    )
    : false;
  if (isPageDisabled) {
    // make all fields of current page to e touched to trigger field validation
    const currentPageTouched = Object.keys(formValues)
      .filter((x) => formValues[x].pageNumber === page)
      .reduce((currentTouched, x) => {
        currentTouched = { ...currentTouched, [x]: true };
        return currentTouched;
      }, {});

    setShowPageValidationMsg(true);
    setTouched(currentPageTouched);

    return false;
  }
  return true;
};
