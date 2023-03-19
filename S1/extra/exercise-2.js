// Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.




const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let aux = foodSchedule;
let aux2 = fruits;

for (let propiedad of aux){
    
    if (propiedad.isVegan == false){

        propiedad.isVegan = true; 
        for (let i = 0; i < aux2.length; i = i +  aux2.splice(0,3)) {
            propiedad.name = aux2[i];
        }
    }
  
}
console.log(aux);