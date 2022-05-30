/* 

Funções -> 

Um bloco de código a ser executado toda vez que eu invocar(chamar,executar)

*/
let readlineSync = require('../../lib/readline-sync.js');

// Importando um código de outra pessoa



//funcao  parametros da função
// Declaração de função
//      28    80.5  1.8
function imc(nome, idade, peso, altura) {
  let imc = peso / altura ** 2;
  // Bloco de código da função
  //Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx
  //console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' + imc.toFixed(2));
  //Template strings

  // Devolve algum valor ou informação para quem está executando essa função
  // Encerra a execução da função
  return `${nome} tem ${idade} anos e seu indice de massa corporal é de ${imc.toFixed(
    2
  )} `;
}

// Wait for user's response.
// while (true) {
//   let nome = readlineSync.question("Qual o seu nome:  ");
//   let idade = readlineSync.question("Qual a sua idade:  ");
//   let peso = readlineSync.question("Qual o seu peso:  ");
//   let altura = readlineSync.question("Qual a altura:  ");
//   //Chamar a função
//   let retorno = imc(nome, idade, peso, altura);
//   console.log(retorno);
// }

// A abertura e o fechamento dos () é obrigatório na chamada da função


// Declaração de função
function soma(num1 = 0,num2 = 0,num3 = 0){
  console.log(num1,'+',num2);
  return num1 + num2;
}

// NaN -> Não é um número
// undefined + undefined -> NaN
// Chamada da nossa função
let retorno = soma(2,5);
console.log(retorno);

// 30% -> 2000 = 2000*(30/100); 
function porcentagem(porcentagem,valor){
  return valor*(porcentagem/100);
}

retorno = porcentagem(30,2000);
console.log(porcentagem(30,2000));

function adicionar(num1,num2) {
  return num1 + num2;
}

function subtrair(num1,num2) {
  return num1 - num2;
}

function multiplicar(num1,num2) {
  return num1 * num2;
}

function quadradoDoNumero(num1) {
  return multiplicar (num1, num1);
}

function dividir(num1,num2) {
  return num1 / num2;
}

function quadradoDoNumero(num1){
  return multiplicar (num1, num1);
}

function mediaDeTresNum(num1, num2, num3){
  let retorno = adicionar(num1, num2);
  let soma = adicionar(retorno, num3);
  return dividir(soma, 3);          
}

function calculaPorcentagem(num1,num2){
  let divisao = dividir(num2,100);
  let calculo = multiplicar(num1,divisao);
  return calculo;
  }


 function geradordePorcentagem(num1,num2){
   let divisao = dividir (num1, num2);
   let calculo = multiplicar (divisao,100);
   return calculo;
 }
  

console.log("-------------- Teste de Operações /  Calculadora ------------");

console.log(adicionar(5,5));
console.log(subtrair(5,1));
console.log(multiplicar(5,5));
console.log(dividir(10,2));
console.log(dividir(5,0));//infinity
console.log(quadradoDoNumero(2));
console.log(mediaDeTresNum(2,5,20));
console.log(calculaPorcentagem (300,15));
console.log(geradordePorcentagem(100,200));




