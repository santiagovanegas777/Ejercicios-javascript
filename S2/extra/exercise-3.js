const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const arraySonidos = [];
const arrayObjetos = [];

for(let individuo of users) {

    for(let sonido in individuo.favoritesSounds) {
        if(!arraySonidos.includes(sonido)){
            const elemento = { name: sonido, contador: 1};
            arraySonidos.push(sonido);
            arrayObjetos.push(elemento);
        } else {
            for(let item of arrayObjetos) {
                if(sonido === item.name) item.contador++;
            }
        }
    }

}

console.log(arraySonidos);
console.log(arrayObjetos);