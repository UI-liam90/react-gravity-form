import { getPrevStep } from './index';

export default (e, props, formValues, pages, activePage, setActivePage, setPageClicked) => {
  e && e.preventDefault();
  const { activePage: setActive } = props;

  const prevPage = getPrevStep(activePage, pages, formValues) || 1;

  setActive && setActive(prevPage);

  setActivePage(prevPage);
  setPageClicked(true);
};
