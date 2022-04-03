const getSavedCartItems = () => {
  // seu código aqui
  const itemsStorage = localStorage.getItem('cartItems');
  return itemsStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
