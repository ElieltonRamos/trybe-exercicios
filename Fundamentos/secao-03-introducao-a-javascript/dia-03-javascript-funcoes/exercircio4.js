let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente){
    let clienteEncontrado = false;
    if(typeof cliente === 'string'){
    for(let index = 0; index < clientesTrybeBank.length; index += 1){
        if (cliente === clientesTrybeBank[index]){
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente Excluido com sucesso.';
        }
    }
} else {
    return 'Insira seu nome corretamente';
}
}

console.log(removeCliente('John'));
console.log(clientesTrybeBank)