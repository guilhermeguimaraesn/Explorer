/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual o nome do aluno?")
let n1 = prompt("Qual a nota da primeira nota?")
let n2 = prompt("Qual a nota da segunda nota?")
let n3 = prompt("Qual a nota da terceira nota?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de " + average + " pontos.")
}
else if(average < 3) {
  alert(student+ " você foi reprovado, estude mais um pouco e não desista!")
}
else {
    alert("Poxa, " + student + " não desista e continue estudando para a prova de recuperação, você é capaz! Sua média foi de " + average + " pontos.")
}