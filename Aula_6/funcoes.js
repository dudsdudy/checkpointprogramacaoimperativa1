// Primeira Função, a função pode ser acionada quantas vezes necessário, depois que eu fiz a declaração.
//Essa é a função declarada.

function darOi() {
  console.log("Olá tudo bem ?");
}

darOi();
darOi();
darOi();
darOi();
darOi();

//Essa é a função expressa, ambas funcionam e tem a mesma função, e podemos usar tanto o let, var
// ou const .

let multiplicar = function () {
  console.log(1 * 2);
};

multiplicar();

// usando a função expressa com parametros
{
  let somar = function (v1, v2) {
    console.log(v1 + v2);
  };

  somar(1, 10);
}
//função com return e console.log fora.
{
  let multiplicar = function (n1, n2) {
    return(n1 * n2);
  };
  multiplicar(5, 10);
  console.log(multiplicar(5, 10));
}


//escopo (nesse exemplo abaixo, vemos um exemplo da função que só funciona dentro do bloco de código)

function multiplicar (num1,num2){
    let resultado = num1*num2;
    }

    console.log(resultado);

    // abaixo outro exemplo de uma váriavel fora da função

    let resultado = 0;

    console.log ("Resultado fora da função=", resultado);


    function multiplicar (numb1, numb2) {
        resultado = numb1 * numb2;
        console.log ("Resultado dentro da função=", resultado);

        multiplicar(2, 2)
    }

 

