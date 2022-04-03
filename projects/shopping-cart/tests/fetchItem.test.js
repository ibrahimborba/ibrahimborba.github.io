require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  //fail('Teste vazio');
  it('should be a function', async () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function');
  })

  it('should call fetch one time, use the expected url and return the expected object', async () => {
    expect.assertions(3);
    const expectedUrl = 'https://api.mercadolibre.com/items/MLB1615760527';
    const response = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expectedUrl);
    expect(response).toEqual(item);
  })

  it('should return the expected error message if passed without an argument', async () => {
    expect.assertions(1);
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })
});
