// Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
// intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
// resultante.

// Sugerencia de array:
// ````js


miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguino'];

// console.log(miArray);

function swap(arr,index1,index2){
 let aux = arr[index1];
 arr[index1] = arr[index2];
 arr[index2] = aux;
 return arr;
}
swap(miArray,0,3);
console.log(miArray);