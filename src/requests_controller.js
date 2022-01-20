const requestsController = (() => {
  function getWelcomeGiphURL() {
    return fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=ed73ctHCkXxVaoWQqT62B7p5ujurNwkF&s=welcome',
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((body) => body.data.images.original.url);
  }

  function getRandomGiphURL() {
    return fetch('https://api.giphy.com/v1/gifs/random?api_key=ed73ctHCkXxVaoWQqT62B7p5ujurNwkF', {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((body) => body.data.images.original.url);
  }

  return { getWelcomeGiphURL, getRandomGiphURL };
})();

export default requestsController;
