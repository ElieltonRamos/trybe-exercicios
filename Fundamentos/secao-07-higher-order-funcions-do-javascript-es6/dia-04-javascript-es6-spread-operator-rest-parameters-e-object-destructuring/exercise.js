// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// cria um novo array com os itens do array original espalhados
const newItems = [...items, 'meia'];
// console.log(newItems)

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['danix', 'chocomil', 'carne assada'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['coca cola', 'cafe', 'suco'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional,]
};

// console.log(fruitSalad(specialFruit, additionalItens));


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const { name, age, nationality } = user
  const { profession, squad, squadInitials } = jobInfos
  
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} ${squad}`)