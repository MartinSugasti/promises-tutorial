const requestsController = (() => {
  async function getGiphURLByKeyword(keyword) {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=ed73ctHCkXxVaoWQqT62B7p5ujurNwkF&s=${keyword}`,
        {
          mode: 'cors',
        }
      );
      const body = await response.json();
      return body.data.images.original.url;
    } catch (error) {
      return 'https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif';
    }
  }

  return { getGiphURLByKeyword };
})();

export default requestsController;
