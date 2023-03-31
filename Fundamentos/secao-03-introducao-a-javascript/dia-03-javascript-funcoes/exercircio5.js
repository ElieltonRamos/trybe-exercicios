let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaCliente(cliente){
    if(typeof cliente === 'string'){
        return true;
    } else {
            return 'Insira seu nome corretamente';
        }
}
function pesquisaCliente(cliente){
    for(let index = 0; index < clientesTrybeBank.length; index += 1){
        if (cliente === clientesTrybeBank[index]){
            return index;
    }
}
    return false
}

function removeCliente(cliente){
    let validacao = validaCliente(cliente);
    if(validacao !== true){
        return validacao
    }

    let index = pesquisaCliente[cliente];
    if(index === false){
        return 'Cliente nao encontrado'
    }
        clientesTrybeBank.splice(index, 1);
        return 'Cliente Excluido com sucesso.';
        }
    




console.log(removeCliente('John'));
console.log(clientesTrybeBank)