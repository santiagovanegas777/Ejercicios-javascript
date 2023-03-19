

const goodProducts = ["Good products"];
const badProducts = ["Bad products"];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (const propiedad of products) {
    if(propiedad.sellCount > 20) {
        goodProducts.push(propiedad);
    } else {
        badProducts.push(propiedad);
    }
    
}

console.log(goodProducts);
console.log(badProducts);