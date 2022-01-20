import requestsController from './requests_controller';

const displayController = (() => {
  function displayGiph() {
    const img = document.querySelector('img');
    requestsController.getWelcomeGiphURL().then((response) => {
      img.src = response;
    });

    // fetch(
    //   'https://api.giphy.com/v1/gifs/translate?api_key=ed73ctHCkXxVaoWQqT62B7p5ujurNwkF&s=welcome',
    //   {
    //     mode: 'cors',
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((body) => {
    //     img.src = body.data.images.original.url;
    //   });

    const searchButton = document.querySelector('button');
    searchButton.addEventListener('click', () => {
      requestsController.getRandomGiphURL().then((response) => {
        img.src = response;
      });

      // fetch('https://api.giphy.com/v1/gifs/random?api_key=ed73ctHCkXxVaoWQqT62B7p5ujurNwkF', {
      //   mode: 'cors',
      // })
      //   .then((response) => response.json())
      //   .then((body) => {
      //     img.src = body.data.images.original.url;
      //   });
    });
  }

  return { displayGiph };
})();

export default displayController;
