/*Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let lista = [
    {
        name: Júlia,
        nota1: 10,
        nota2: 2,
    },

    {
        name: Amanda,
        nota1: 8,
        nota2: 5,
    },

        {
        name: Maria,
        nota1: 6,
        nota2: 12,
    },

            {
        name: Letícia,
        nota1: 10,
        nota2: 16,
    }
]



function MediaEstudantes (nota1, nota2){
 
    return (nota1 + nota2) / 2
}

let media = MediaEstudantes()

alert( lista[0].nota1 )

