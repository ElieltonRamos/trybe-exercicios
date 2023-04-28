const validaCampos = (name, age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias')
    }
};

const verificaIdade = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    }
};

const studentRegister = (name, age) => {
    try {
        validaCampos(name, age);
        verificaIdade(age);
        return `${name}, seja bem-vindo(a) à AuTrybe!`
    } catch(erro) {
        return erro.message
    }
  }
console.log(studentRegister(17))