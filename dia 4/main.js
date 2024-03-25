let fome = prompt("você está com fome?") ;
let dinheiro = prompt("você tem dinheiro?") ;
let restaurante = prompt("você o restaurante está aberto?") ;

if(fome ==="não" || dinheiro ==="não"){
    console.log("Hoje a janta será em casa")
}

if( fome === "sim" && dinheiro === "sim" && restaurante === "não"){
    console.log("Peça um delivery")
}
else{
    console.log("Hoje o jantar será no seu restaurante preferido")
}