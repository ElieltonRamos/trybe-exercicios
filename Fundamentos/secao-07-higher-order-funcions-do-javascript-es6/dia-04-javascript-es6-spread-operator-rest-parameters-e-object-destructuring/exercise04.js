const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
//   Escreva uma função filterPeople que, dada uma lista de pessoas,
//   retorna todas as pessoas australianas que nasceram no século 20:
  // escreva filterPeople abaixo
  const filterPeople = (array) => {
   const australian20 = array.filter((element) => element.nationality === 'Australian' && element.bornIn < 2000)
   return australian20
} 
filterPeople(people)