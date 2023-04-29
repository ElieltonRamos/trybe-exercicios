function techList (array, name) {
  let result = [];
  if(array.length === 0){
    result = 'Vazio!'
  } else {
    let ordernado = array.sort()
    for (let index = 0; index < ordernado.length; index += 1) {
      result.push({tech: ordernado[index], name: name})
    };
  }
  return result
}
console.log(techList([], 'Lucas'))
module.exports = techList