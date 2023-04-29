const { myRemove, myFizzBuzz, encode, decode } = require("./funcoes")

describe('Testa funcão myRemove', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe('Testa função myFizzBuzz', () => {
  it('Retorne fizz quando o numero e divisivel por 3', () =>{
    expect(myFizzBuzz(3)).toBe("fizz")
  })
  it('Retorne fizzbuzz quando o numero e divisivel por 3 e 5 ', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  it('Retorne buzz caso o numero seja divisivel por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz')
  })
  it('Retorne 2 quando a entrada for 2', () => {
    expect(myFizzBuzz(2)).toBe(2)
  })
  it('retorne false caso a entrada nao seja um numero', () => {
    expect(myFizzBuzz('ola')).toBe(false)
  })
})

describe('Testa funcoes encode e decode', () => {
  it('Encode e uma funcao', () => {
    expect(typeof encode).toBe('function')
  })
  it('decode e uma funcao', () => {
    expect(typeof decode).toBe('function')
  })
  it('Teste se a funcao encode retorna 1,2,3,4,5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
  })
  it('testa de 1,2,3,4,5 retorna a,e,i,o,u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
  })
  it('testa demais letras', () => {
    expect(encode('a, b, c, d, e, f')).toBe('1, b, c, d, 2, f')
  })
  it('testa se nao existem caracteres a mais na conversao', () => {
    expect(decode('1, 2, 3, 4, 5').length).toBe(13)
  })
})