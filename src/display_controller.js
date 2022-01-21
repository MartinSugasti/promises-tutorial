import requestsController from './requests_controller';

const displayController = (() => {
  async function displayWelcomeGiph() {
    const img = document.querySelector('img');

    const welcomeGiphURL = await requestsController.getGiphURLByKeyword('welcome');
    img.src = welcomeGiphURL;
  }

  function addSearchFunctionality() {
    const img = document.querySelector('img');
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const giphKeyword = document.querySelector('input').value;

      const giphURL = await requestsController.getGiphURLByKeyword(giphKeyword);
      img.src = giphURL;
    });
  }

  function displayGiph() {
    displayWelcomeGiph();
    addSearchFunctionality();
  }

  return { displayGiph };
})();

export default displayController;
