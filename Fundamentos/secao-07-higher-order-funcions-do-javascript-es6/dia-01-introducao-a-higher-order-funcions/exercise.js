const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
emailListInData.forEach((email) => console.log('O email '+ email + ' está cadastrado em nosso banco de dados!'))

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((index) => index % 3 === 0 && index % 5 === 0))

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((nome) => nome.length === 5))

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => name === nome);

console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
const verifyAges = (array, idade) => array.every((pessoa) => pessoa.age >= idade )
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));