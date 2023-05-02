/*
Solicite dois números, faça a soma deles e apresente o resultado final ao usuário

*/
alert("Realizando a soma de dois números")

let numberOne = prompt("Digite o primeiro número:") // O uso de ponto e vírgula ao final é facultativo
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo) //Number() é utilizado mudar de string para número

alert("Resultado final: " + result) 

