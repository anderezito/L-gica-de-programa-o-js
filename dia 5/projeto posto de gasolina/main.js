let escolha= Number(prompt("escolha o que deseja:" + "\n1 = Abastecer com gasolina; \n2 = Abastecer com àlcool ; \n3 = calibrar os pneus"))
let valor 
let quantidade 
switch(escolha){
    case 1 :
        valor = parseInt(prompt("digite o valor em litros"))
        quantidade= valor / 5
        console.log("o valor da compra ficou em " + quantidade + "L")
        break ;

    case 2 :
        valor = parseInt(prompt("digite o valor em litros"))
        quantidade= valor / 5
        console.log("o valor da compra ficou em " + quantidade + "L")
        break ;

    default :
    console.log("pneus calibrados com sucesso")
    break ;
}
