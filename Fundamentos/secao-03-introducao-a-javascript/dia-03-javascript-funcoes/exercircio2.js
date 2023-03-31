let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cadastro(cliente){
if( typeof cliente === 'string'){
    clientesTrybeBank.push(cliente)
    return 'Cliente adicionado com sucesso!'
}else{
    return 'O parametro deve ser uma string';
}
}

console.log(cadastro('Joao da silva'))