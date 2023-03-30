let salarioBruto = 3000;
let inss;
let valorIr;

if(salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08;
}else if(salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
}else{
    inss = 570.88;
};

let salariobase = salarioBruto - inss;
if(salariobase <= 1903.98){
    valorIr = 0;
}else if(salariobase <= 2826.65){
    valorIr = (salariobase * 0.075) - 142.80;
}else if(salariobase <= 3751.05){
    valorIr = (salariobase * 0.15) - 354.80;
}else if(salariobase <= 4664.68){
    valorIr = (salariobase * 0.225) - 636.13;
}else{
    valorIr = (salariobase * 0.275) - 869.36;
};
console.log('Salario Liquido e '+ (salariobase - valorIr))

