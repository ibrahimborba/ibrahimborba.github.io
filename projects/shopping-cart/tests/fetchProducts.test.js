require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('should be a function', async () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  })

  it('should call fetch one time, use the expected url and return the expected object', async () => {
    expect.assertions(3);
    const expectedUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(computadorSearch);
  })

  it('should return the expected error message if passed without an argument', async () => {
    expect.assertions(1);
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })
});
