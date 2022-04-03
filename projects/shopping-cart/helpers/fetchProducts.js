const fetchProducts = (product) => {
  // seu código aqui
    const promise = fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);

    return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
