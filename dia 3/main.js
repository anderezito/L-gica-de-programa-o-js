//coletando dados
let nomeDoUsuario = prompt("insira seu nome") ;
let idadeDoUsuario = prompt("insira sua idade") ;
let alturaDoUsuario = prompt("insira sua altura (em metros)") ;
let alturaDoUsuarioNumero = Number(alturaDoUsuario) ;
let pesoDoUsuario = prompt("insira seu peso em kg ") ;
let pesoDoUsuarioNumero = Number(pesoDoUsuario) ;

// calculo

let anoNasc = 2023 - idadeDoUsuario

let imc= 0
imc= pesoDoUsuarioNumero / (alturaDoUsuarioNumero * alturaDoUsuarioNumero)

// mensagem

console.log( "olá " + nomeDoUsuario + " ,voce tem " + idadeDoUsuario +" anos, nasceu em " + anoNasc + ", tem " + alturaDoUsuario + " de altura , pesa " + pesoDoUsuarioNumero + " kg e seu IMC é " + imc +"kg/m²")