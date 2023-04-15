// Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}


for (const value in alien) {
    console.log(`${value} : ${alien[value]}`);
    
}