

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let sellCountSuma = [];
let sum = 0;



for (const propiedad of products) {
sellCountSuma.push(propiedad.sellCount)
}


for (let i = 0; i < sellCountSuma.length; i++) {
    sum = sum + sellCountSuma[i];
}
console.log(sum);
