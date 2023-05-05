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