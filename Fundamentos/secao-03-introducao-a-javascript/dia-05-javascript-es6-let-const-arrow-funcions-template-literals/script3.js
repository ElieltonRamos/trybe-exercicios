const substituaX = (nome) => {
    const frase = 'Tryber x aqui!'
    let frase2 = frase.split(' ')
    frase2[1] = nome
const result = frase2.join(' ')
return result
}
// console.log(substituaX('bebeto'))
const minhasSkills = (result) => {
    const skills = ['html', 'css', 'javascript'];
    let result2 = `${result}
    Minhas três principais habilidades são:
    *${skills[0]}
    *${skills[1]}
    *${skills[2]} `
return result2
}
console.log(minhasSkills(substituaX('bebeto')))