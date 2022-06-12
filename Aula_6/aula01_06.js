let contador = 0;
while (contador <= 1000) {
  console.log(contador);
  contador++;
}

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    
    const elemento = array[i];
    soma += elemento;
  }
  return soma;
}

console.log (somarArray([3,4,6]))