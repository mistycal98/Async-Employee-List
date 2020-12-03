const url = 'https://tushar1998.github.io/json-data-server/mantriCards.json';

// immediately invoked function IIFE
export const data = (async () => {
    let response = await axios.get(url);
    // console.log(response.data);
    return response.data;
})();