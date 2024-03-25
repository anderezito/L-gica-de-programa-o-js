// variáveis
let mediaGeral = 0
let qtHomens= 0
let = mulheresMaior7= 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10){
    nota = Number(prompt("insira a nota do " + contador + "º Aluno"))
    sexo = prompt("insira o sexo do aluno (m/f)")

    if(sexo == "m" ){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota 
        }
        qtHomens ++
    } 

    if(sexo == "f" && nota > 7 ){
        mulheresMaior7 ++
    }
    mediaGeral += nota
    contador ++ 
}

mediaGeral = mediaGeral / 10 
 console.log("A media geral dos alunos foi: " + mediaGeral)
 console.log("A quantidade de homens cadastrados foi: " + qtHomens)
 console.log("A quantidade de mulheres com nota acima de 7 foi: " + mulheresMaior7)
 console.log("A maior nota entre homens foi: " + maiorNotaHomens)
