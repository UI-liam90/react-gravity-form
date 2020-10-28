import { forceValidationOfCurrentPage, getNextStep } from './index'

export default (e, props, pages, formValues, activePage, setActivePage, setPageClicked, setTouched, setShowPageValidationMsg) => {
  e && e.preventDefault();
  const { activePage: setActive, beforeNextPage } = props;

  const isPageValidated = forceValidationOfCurrentPage(activePage, formValues, setShowPageValidationMsg, setTouched);
  if (!isPageValidated) return false;

  const nextPage = getNextStep(activePage, pages, formValues);

  if (beforeNextPage) {
    beforeNextPage(activePage, formValues, nextPage);
  }

  setActive && setActive(nextPage);

  setActivePage(nextPage);
  setPageClicked(true);
  setShowPageValidationMsg(false);

  setActivePage(nextPage);
  setPageClicked(true);
  setShowPageValidationMsg(false);
};
