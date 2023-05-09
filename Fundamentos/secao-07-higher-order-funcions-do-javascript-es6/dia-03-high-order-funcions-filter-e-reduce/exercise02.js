const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  const expectedResult = 20;
  const countA = () => {
    let names2 = [];
    names.forEach((Element) => {
      names2 += Element.toLocaleLowerCase();
    })
    const letrasA = names2.split('');
    let qtdA = 0;
    letrasA.forEach((Element) => Element === 'a' ? qtdA += 1 : 0);
    return qtdA;
  }

  console.log(countA() === expectedResult)

// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult1 = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const studentAverage = () => {
  const obj = []
  students.map((Element, index) => {
    obj.push({
    name: Element,
    average: grades[index].reduce((acc, curr) => acc + curr, 0)/grades[index].length
    })
  })
  return obj
}
console.log(studentAverage() === expectedResult1)