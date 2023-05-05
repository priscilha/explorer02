/*Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let lista = [
    {
        nome: 'Júlia',
        nota1: 10,
        nota2: 2,
    },

    {
        nome: 'Amanda',
        nota1: 8,
        nota2: 5,
    },

    {
        nome: 'Maria',
        nota1: 6,
        nota2: 12,
    },

            {
        nome: 'Letícia',
        nota1: 10,
        nota2: 16,
    }
]



function calculaMedia (nota1, nota2){
let media = (nota1 + nota2) / 2
return media
}

for(let estudante of lista){
    mediaEstudante = calculaMedia (estudante.nota1, estudante.nota2)
    let aprovadoOuNao = mediaEstudante < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${estudante.nome} é ${mediaEstudante}.
${aprovadoOuNao}`)
}       

