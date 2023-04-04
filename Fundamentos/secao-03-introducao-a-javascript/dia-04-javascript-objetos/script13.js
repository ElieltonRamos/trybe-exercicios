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

let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
  });

  function getInfo(obj, name) {
    let allLessons = [];
    let numberStudents = 0;
    let values = Object.values(obj);
    for (index in values) {
      if (values[index].professor === name) {
        allLessons.push(values[index].materia)
        numberStudents += values[index].numeroEstudantes;
      }
    }
    return { aulas: allLessons, estudantes: numberStudents };
  }
  
  function createReport(allLessons, name) {
    let report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));