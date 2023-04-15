// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

const miArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const texto = "Mosquito";

function findArrayIndex(miArray,texto){
    let indice = miArray.findIndex(Array => Array === texto);
    console.log( indice);
 return indice;
}


function removeItem (miArray,texto){
 const findArray= findArrayIndex(miArray,texto);
  return miArray.splice(findArray,1);
    
}

removeItem(miArray,texto);

console.log(miArray);