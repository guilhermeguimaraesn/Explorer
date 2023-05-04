/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Guilherme",
        age: 21,
        weight: 70,
        height: 190,
    },
    {
        name: "Maria",
        age: 45,
        weight: 65,
        height: 165,
    },
    {
        name: "Gustavo",
        age: 18,
        weight: 65,
        height: 182,
    },
]

function calcIMC (weight, height) {
return ( weight / (( height / 100) ** 2)).toFixed(2)
}

function showIMC (patient) {
    return `
    Paciente ${patient.name} possui o IMC de ${calcIMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
    let messageIMC = showIMC(patient)
    alert(messageIMC) 
}