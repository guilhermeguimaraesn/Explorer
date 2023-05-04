const estudantes = [
    {
        name: "Guillherme",
        noteOne: 2,
        noteTwo: 5,
    },

    {
        name: "Gustavo",
        noteOne: 6,
        noteTwo: 8,
    },

    {
        name: "Bernardo",
        noteOne: 9,
        noteTwo: 9,
    }
]

function average(note01, note02) {
    return ((note01 + note02) / 2).toFixed(2)
}

function showAverage(estudent) {
    return average(estudent.noteOne, estudent.noteTwo)
}

for (let estudent of estudantes) {
    if (showAverage(estudent) >= 7) {
        alert(`A media do aluno ${estudent.name} é: ${showAverage(estudent)}\n
Parabéns, ${estudent.name}! Você foi aprovadoa(a) no concurso!`)
    }
    else {
        alert(`A media do aluno ${estudent.name} é: ${showAverage(estudent)}\n
Não foi dessa vez ${estudent.name}! tente novamente.`)

    }
}
