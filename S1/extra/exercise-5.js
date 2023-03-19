//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let sum = 0
let sumasellcount = []


for (const propiedad of products) {
    sumasellcount.push(propiedad.sellCount);
    
}


for (let i = 0; i < sumasellcount.length; i++){
    sum = sum + sumasellcount[i];
}
let sumPromedio = sum / 4 

console.log(sumPromedio);