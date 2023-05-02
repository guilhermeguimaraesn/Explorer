/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
 
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo ;
let sub= numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let restDiv = numberOne % numberTwo;

alert("A soma é " + sum )
alert("A subtração é " + sub)
alert("A multiplicação é " + mult)
alert("A divisão é " + div)
alert("O resto da divisão é " + restDiv)