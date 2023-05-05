const createItem = require('./createItem');
describe('a função createItem', () => {
  it('Verifica se a funcao cria o objeto adequadamente', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 })
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toEqual({"name": "banana", "price": 1.99, "quantity": 0, "unit": "kg"})
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error)
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(1.99, 'kg', 'banana', 20)}).toThrowError(('O nome do item deve ser uma string'))
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana', 'kg', -0.01, 20)}).toThrowError('O preço do item deve ser maior que zero')
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana', 'kg', 0, 20)}).toThrowError('O preço do item deve ser maior que zero')
  });
});