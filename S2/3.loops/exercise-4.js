// Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
let aux =[];

for (const element of toys) {
if(!element.name.includes('gato')){
    aux.push(element);
}

}
 console.log(aux);


//     if(element.name.includes('gato')){
// delete(toys[element]);
//     }
    
  
   