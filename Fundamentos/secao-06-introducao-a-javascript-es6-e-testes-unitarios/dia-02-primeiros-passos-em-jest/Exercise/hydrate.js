function hydrate (quantidadeBebida) {
  let result = '';
  const localizadorNumber = /\d+/g;
  const quantidadeString = quantidadeBebida.match(localizadorNumber);
  let quantidade = [];
  let coposAgua = 0;
  for (let index of quantidadeString) {
    quantidade.push(parseInt(index));
  }
  for (let index of quantidade) {
    coposAgua += index;
  }
  if (coposAgua > 1) {
    result = `${coposAgua} copos de água`;
  } else {
    result = `${coposAgua} copo de água`;
  }
  return result;  
}
module.exports = hydrate