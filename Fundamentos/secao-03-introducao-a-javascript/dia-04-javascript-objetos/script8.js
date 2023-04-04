let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
function addPropriedade( objeto, chave, valor){
  objeto[chave] = valor;
}
let chave = 'turno'
let valor = 'noite'
addPropriedade (lesson2, chave, valor)
console.log(lesson2)
console.log('----')

function listKeys(objeto){
  let listKeys = Object.keys(objeto)
  return listKeys
}
console.log(listKeys(lesson1))
console.log('----')

function listTamanho(objeto){
  let listTamanho = Object.entries(objeto)
  return listTamanho
}
console.log(listTamanho(lesson2))
console.log('----')

function listValores(objeto){
  let listValores = Object.values(objeto)
  return listValores
}
console.log(listValores(lesson3))
console.log('----')

let allLessons = Object.assign({}, { 
  lesson1: lesson1, 
  lesson2: lesson2, 
  lesson3: lesson3, 
});
console.log(allLessons)
console.log('----')

function qtdAlunos(objeto){
  let alunosLesson1 = allLessons.lesson1.numeroEstudantes;
  let alunosLesson2 = allLessons.lesson2.numeroEstudantes;
  let alunosLesson3 = allLessons.lesson3.numeroEstudantes;
  let totalAlunos = alunosLesson1 + alunosLesson2 + alunosLesson3;
  return totalAlunos
}
console.log(qtdAlunos(allLessons))
console.log('----')

function valorKey(objeto, number){
  let valorKey = Object.values(objeto)[number]
  return valorKey
}
console.log(valorKey(allLessons, 0))
console.log('----')

function verifyPair(objeto, key, valor){
  let verifyPair = Object.entries(objeto)
  let issoExiste = false
  for (let index in verifyPair) {
  if (verifyPair[index][0] === key && verifyPair[index][1] === valor){
    issoExiste = true;
  }
  return issoExiste;
}
}
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));