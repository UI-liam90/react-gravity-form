import getPrevStep from './getPrevStep';

export default (event, props, formValues, pages, activePage, setActivePage, setPageClicked) => {
  event.preventDefault();
  const prevPage = getPrevStep(activePage, pages, formValues) || 1;
  setActivePage(prevPage);
  setPageClicked(true);
};
