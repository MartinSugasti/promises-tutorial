import requestsController from './requests_controller';

const displayController = (() => {
  function displayWelcomeGiph() {
    const img = document.querySelector('img');

    requestsController.getGiphURLByKeyword('welcome').then((response) => {
      img.src = response;
    });
  }

  function addSearchFunctionality() {
    const img = document.querySelector('img');
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const giphKeyword = document.querySelector('input').value;

      requestsController.getGiphURLByKeyword(giphKeyword).then((response) => {
        img.src = response;
      });
    });
  }

  function displayGiph() {
    displayWelcomeGiph();
    addSearchFunctionality();
  }

  return { displayGiph };
})();

export default displayController;
