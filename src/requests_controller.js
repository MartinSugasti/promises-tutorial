const requestsController = (() => {
  function getGiphURLByKeyword(keyword) {
    return fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=ed73ctHCkXxVaoWQqT62B7p5ujurNwkF&s=${keyword}`,
      {
        mode: 'cors',
      }
    )
      .then((response) => response.json())
      .then((body) => body.data.images.original.url)
      .catch(() => 'https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif');
  }

  return { getGiphURLByKeyword };
})();

export default requestsController;
