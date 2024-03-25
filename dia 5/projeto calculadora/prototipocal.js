let numeroUm = Number(prompt("escolha o primeiro numero"))
let numeroDois = Number(prompt("escolha o segundo numero"))
let operação = Number(prompt("escolha a operação que deseja realizar:" + "\n1 = + ; \n2 = - ; \n3 = * ; \n4 = /"))
switch(operação){
    case 1 :
        console.log(numeroUm + "+" + numeroDois + "=" + (numeroUm + numeroDois))
        break ;

    case 2:
        console.log(numeroUm + "-" + numeroDois + "=" + (numeroUm - numeroDois))
        break ;

    case 3 :
        console.log(numeroUm + "*" + numeroDois + "=" + (numeroUm * numeroDois))
        break ;

    default :
    console.log(numeroUm + "/" + numeroDois + "=" + (numeroUm / numeroDois))
    break ;
}
