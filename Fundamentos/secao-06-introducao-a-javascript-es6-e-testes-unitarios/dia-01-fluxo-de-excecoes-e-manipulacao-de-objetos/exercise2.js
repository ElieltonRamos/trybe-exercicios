const verificaNumber = (a, b, c, d) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') {
        throw new Error('Todos os valores devem ser numeros')
    }
}


const boletim = (a, b, c, d) => {
    try {
        verificaNumber(a, b, c, d);
        return (a + b + c + d)/4
    } catch(erro) {
        return erro.message
    }

}
console.log(boletim(1, 'e', 3, 4))