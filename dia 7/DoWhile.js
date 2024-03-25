let saldo = 1000; 
let maiorValorInserido = 0 ;
let somaValoresInseridos= 0 ;
let totalTransacoes= 0 ;
let continuar=  false; 

do{
    let nome = prompt("digite seu nome");
    let cpf = prompt("digite seu cpf");
    let valor = Number(prompt("insira um valor da transação"));
    let opcao = prompt("escolha a opção saque ou depósito (s/d)");

    if(valor < 0){
        console.log ("Valor invalido. A transação não foi realizada.");
    } else if(opcao == "s" && valor > saldo){
        console.log("saldo insuficiente. A transação não foi realizada");
    } else if (opcao == "s") {
        console.log(`olá, ${nome} (${cpf}), seu saldo atual é R $${saldo}.`); 
        saldo -= valor ;
        totalTransacoes ++ ;
        somaValoresInseridos += valor ;
        if(valor >maiorValorInserido){
            maiorValorInserido = valor; 
        }
        console.log(`Transação realizada com sucesso. Seu saldo é R$${saldo}.`);

    }   else{ 
            console.log(`olá, ${nome} (${cpf}), seu saldo atual é R $${saldo}.`);
            saldo += valor;
            totalTransacoes++ ;
            somaValoresInseridos = valor ;
            if (valor > maiorValorInserido){
                maiorValorInserido = valor ;
            }
            console.log(`olá, ${nome} (${cpf}), seu saldo atual é R $${saldo}.`);
        }

        let escolha = prompt ("deseja continuar? (1 para continuar, 2 para parar):") ;
        if (escolha === "1"){
            continuar = true
        } else if (escolha === "2") {
            continuar = false
        } else{
            console.log("Opção inválida. Programa encerrado")
            continuar = false 
        }
    } while (continuar)
    console.log(`saldo final: R$${saldo}`)
    console.log(`Maior valor inserido: R$${maiorValorInserido}`)
    console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`)
