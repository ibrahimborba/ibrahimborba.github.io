const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('should call localStorage.getItem', () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('should pass the expected parameter to localStorage.getItem', () => {
    expect.assertions(1);
    const expectedKey = 'cartItems';
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(expectedKey);
  });
});
