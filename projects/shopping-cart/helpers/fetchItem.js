const fetchItem = (id) => {
  // seu código aqui
  const itemPromise = fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  
  return itemPromise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
