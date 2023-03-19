

const movies = [{ name: "Your Name", durationInMinutes: 130 }, { name: "Pesadilla antes de navidad", durationInMinutes: 225 }, { name: "Origen", durationInMinutes: 165 }, { name: "El señor de los anillos", durationInMinutes: 967 }, { name: "Solo en casa", durationInMinutes: 214 }, { name: "El jardin de las palabras", durationInMinutes: 40 }];


let peliculaPequeña = ["pelicula pequeña"];
let peliculaMediana = ["pelicula mediana"];
let peliculaGrande = ["PELICULA GRANDE"];



for (let propiedad of movies) {

    if (propiedad.durationInMinutes < 100) {
        peliculaPequeña.push(propiedad);
    } else if (propiedad.durationInMinutes < 200) {
        peliculaMediana.push(propiedad);
    } else {
        peliculaGrande.push(propiedad);
    }

}


console.log(peliculaPequeña);
console.log(peliculaMediana);
console.log(peliculaGrande);