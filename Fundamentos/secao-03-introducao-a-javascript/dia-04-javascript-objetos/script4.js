student = {}
function addProperty(object, key, value) {
    object[key] = value;
  };
  let newKey = 'nome'
  let nome = 'Elielton'
addProperty(student, newKey, nome)


let newKey2 = 'email'
let email = 'elieltonramos14@gmail.com'
addProperty(student, newKey2, email)

let neyKey3 = 'telefone'
let telefone = '3898866-3580'
addProperty( student, neyKey3, telefone)

let neyKey4 = 'GitHub'
let GitHub = 'ElieltonRamos'
addProperty(student, neyKey4, GitHub)

let newKey5 = 'Linkedin'
let Linkedin = 'https://www.linkedin.com/in/elielton-ramos/'
addProperty(student, newKey5, Linkedin)
console.log(student)