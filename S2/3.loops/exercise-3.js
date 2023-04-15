// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

let placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
let aux = [];



for (let i = 0; i < placesToTravel.length; i++) {
    // Creo un condicional que mediante delete me elimina los objetos que contienen los caracters que le eh asignado
    if(placesToTravel[i].id === 11 || placesToTravel[i].id === 40){
        delete placesToTravel[i];

}

}

console.log(placesToTravel);






//  const places = ()=>{
//   for (let i = 0; i < placesToTravel.length;i++) {
//      console.log(`${placesToTravel.id}${(i)}`);
//     }
//  };
//  places();

// const places = ()=>{
//  for (let i = 0; i < placesToTravel.length;i++) {
//     console.log(i);
// if(placesToTravel(i) === 11){
    
//     aux.delete(i);
// }

// }


// }

// const init = ()=>{
// const forPlaces =  places();
// console.log(aux)
// };

// init();
// for (let element of placesToTravel) {
//     if(element.id ===11){
//      placesToTravel.delete(element);
    
//     }
    
// }
// console.log(placesToTravel);