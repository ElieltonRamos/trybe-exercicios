let angulo1 = 15;
let angulo2 = 100;
let angulo3 = 50;
let somaAngulos = angulo1 + angulo2 + angulo3;
let triangulo;
if(somaAngulos === 180){
    triangulo = true;
}else if(somaAngulos != 180){
    triangulo = false;
}
console.log(triangulo)