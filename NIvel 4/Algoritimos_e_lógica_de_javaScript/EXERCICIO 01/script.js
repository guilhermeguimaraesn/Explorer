
let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma é: ${sum}`)
alert(`A subtração: ${sub}`)
alert(`A multiplicação é: ${mult.toFixed(2)}`)
alert(`A divisão é: ${div.toFixed(2)}`)
alert(`O resto da divisão: ${restDiv.toFixed(2)} `)

if (sum % 2 == 0) {
    alert(`A soma dos dois números é par`)
} else {
    alert(`A soma dos dois números é impar`)
}

if (numberOne != numberTwo) {
    alert("Os números são diferentes")
} else {
    alert("Os números são iguais")
}