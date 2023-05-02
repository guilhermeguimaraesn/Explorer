/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

// Math.random para mostrar um número aleatório de 0 a 10, por isso está multiplicando por 10.
// Marh.roud para arredondar sempre o número com casas decimais para cima, ex: 1.222 se transforma em 2.
const randomNumber = Math.round(Math.random() * 10)

//Verificar se o número digitado é o mesmo que foi gerado aleatoriamente

let xAttempts = 1

while (Number(result) != randomNumber) {

    result = prompt("Erro, tente novamente: ")
    xAttempts++
}

if (xAttempts == 1) {
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativa`) 
}
else {
    alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)
}