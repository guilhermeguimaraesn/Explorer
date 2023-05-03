/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

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

for (let index = 0; index < patients.length; index++) {
    alert(`
    Paciente: ${patients[index].name}
    Idade: ${patients[index].age}
    Peso: ${patients[index].weight}
    Altura: ${Number(patients[index].height)}`)
}

