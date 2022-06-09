//> (maior) < (menor)



let selecao_Pipoca ="10";
let selecao_Macarrão ="8";
let selecao_Carne ="15";
let selecao_Feijão ="12";
let selecao_Brigadeiro ="8";
let comida ="15";
let tempo ="10";

function opcao(comida, tempo) {

if (comida == 1 && tempo == selecao_Pipoca) {
    console.log("Pipoca")
    console.log("Prato pronto, bom apetite!!!") }
else if (comida == 1 && tempo > selecao_Pipoca * 2 && tempo < selecao_Pipoca *3) {
    console.log("A comida queimou!")
}
else if (comida == 1 && tempo > selecao_Pipoca * 3) {
    console.log("kabumm!!")
}
else if (comida == 1 && tempo < selecao_Pipoca){
    console.log("Tempo Insuficiente!!'")
}
if (comida == 2 && tempo == selecao_Macarrão) {
    console.log("Macarrão")
    console.log("Prato pronto, bom apetite!!!") }
else if (comida == 2 && tempo > selecao_Macarrão * 2 && tempo < selecao_Macarrão *3) {
    console.log("A comida queimou!")
}
else if (comida == 2 && tempo > selecao_Macarrão * 3) {
    console.log("kabumm!!")
}
else if (comida == 2 && tempo < selecao_Macarrão){
    console.log("Tempo Insuficiente!!'")

}
if (comida == 3 && tempo == selecao_Carne) {
    console.log("Carne")
    console.log("Prato pronto, bom apetite!!!") }
else if (comida == 3 && tempo > selecao_Carne * 2 && tempo < selecao_Carne *3) {
    console.log("A comida queimou!")
}
else if (comida == 3 && tempo > selecao_Carne * 3) {
    console.log("kabumm!!")
}
else if (comida == 3 && tempo < selecao_Carne){
    console.log("Tempo Insuficiente!!'")

}
}
if (comida == 3 && tempo == selecao_Feijão) {
    console.log("Feijão")
    console.log("Prato pronto, bom apetite!!!") }
else if (comida == 3 && tempo > selecao_Feijão * 2 && tempo < selecao_Feijão *3) {
    console.log("A comida queimou!")
}
else if (comida == 3 && tempo > selecao_Feijão * 3) {
    console.log("kabumm!!")
}
else if (comida == 3 && tempo < selecao_Feijão){
    console.log("Tempo Insuficiente!!'")

}
if (comida == 4 && tempo == selecao_Brigadeiro) {
    console.log("Brigadeiro")
    console.log("Prato pronto, bom apetite!!!") }
else if (comida == 4 && tempo > selecao_Brigadeiro * 2 && tempo < selecao_Brigadeiro *3) {
    console.log("A comida queimou!")
}
else if (comida == 4 && tempo > selecao_Brigadeiro * 3) {
    console.log("kabumm!!")
}
else if (comida == 4 && tempo < selecao_Brigadeiro){
    console.log("Tempo Insuficiente!!'")

}
else{
    console.log('Prato inexistente');
}


opcao(comida,tempo);

teste1