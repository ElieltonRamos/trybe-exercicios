let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  let arrayOfinfos = Object.values(info);
    console.log('Bem-vinda, '+arrayOfinfos[0])

    info['recorrente'] = 'Sim'
    console.log(info)

  let keys = Object.keys(info)
    for(let index in keys){
        console.log(keys[index])
        console.log('-----')
    }

let values = Object.values(info)
    for (let index2 in values){
        console.log(values[index2])
        console.log('----')
    }

let info2 = Object.assign({},info )
info2.personagem = 'Tio patinhas'
info2.origem = 'Christmas on Bear Mountain, Dells Four Color Comics #178'
info2.nota = 'O último MacPatinhas'

console.log(info.personagem +' e '+ info2.personagem)
console.log(info.origem + ' e ' +info2.origem)
console.log(info.nota+' do '+ info2.nota)
console.log('Ambos recorrentes')