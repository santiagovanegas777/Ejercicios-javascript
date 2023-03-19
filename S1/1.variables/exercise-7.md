Dado el siguiente javascript, actualiza el valor de la variable ``globalBasePrice`` a 25000 y actualiza la propiedad ``finalPrice`` de todos los coches con el valor de su propiedad ``basePrice`` más el valor de la variable ``globalBasePrice``.

```js
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
```
/////////////////////////////////////////////////////////////
let globalBasePrice = 25000;
let sumaFin = globalBasePrice + 50000;
let sumaFin2 = globalBasePrice + 70000;

let car1 = {name: 'BMW m&m' , basePrice: 50000, finalPrice:(sumaFin)};
console.log(car1);

let car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice:(sumaFin2)};
console.log(car2);