let nome = prompt ("digite seu nome")
let idade = Number(prompt("digite sua idade"))
let peso = prompt ("digite seu peso em KG")
let profissão = prompt ("digite sua profissão")
let altura = prompt ("digite sua altura em metros")

console.log("Olá" + nome + ", você tem " + idade + "anos, é " + profissão + ", tem " + altura + "m de altura e pesa" + peso + " kg.")

if (idade >= 18) {
    console.log ("Está liberado para tomar umas geladas.")
} else {
    console.log("Sem gelada pra você")
}

let meses = idade * 12
let semanas = idade * 52 
let dias  = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)
