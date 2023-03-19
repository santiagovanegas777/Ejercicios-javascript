let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};



let auxCar1 = car1;
let auxCar2 = car2;
globalBasePrice = 25000;
let sumaFin = globalBasePrice + 50000;
let sumaFin2 = globalBasePrice + 70000;

 auxCar1.finalPrice = sumaFin;
console.log(auxCar1);

 auxCar2.finalPrice = sumaFin2
console.log(auxCar2);