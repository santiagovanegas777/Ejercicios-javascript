// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
// de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
// Para filtrar las categorías puedes ayudarte de la función `.includes()`.


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
// comedia____
// aventur----
// accion
// thriller
// animacion

const categorias = []


 for (const element of movies) {
    if (element.categories.includes('animación')){
        categorias.push(element.categories);
    } else if ((element.categories.includes('comedia'))&&(element.categories.includes('thriller'))){
        categorias.push(element.categories[1]);
     }
     else if((element.categories.includes('aventura'))&&(element.categories.includes('acción'))){
        categorias.push(element.categories[1]);
    }
    
 }
 console.log(categorias);
// for (const element of movies) {
//     categorias.push(element.categories);
//     if(categorias.includes('comedia')){
//         categorias.push();
//     }
// }
// console.log(categorias);




// let comedia = ["comedia"];
// let aventura = ["aventura"];
// let accion = ["accion"];
// let animación = ["animacion"];
// let thriller = ["thriller"];
// for (const element of movies) {
//     // categorias.push(element.categories)
//     if ((element.categories.includes('comedia'))&&(!element.categories.includes('aventura'))&&(!element.categories.includes('acción'))&&(!element.categories.includes('animacion'))&&(!element.categories.includes('thriller'))) {
//         categorias.push(element.categories);
//     }





//      else if (!element.categories.includes('aventura')){
//         categorias.push(element.categories);
//      }
//      else if (!element.categories.includes('acción')) {
//         categorias.push(element.categories);
//      } else if (!element.categories.includes('animacion')) {
//         categorias.push(element.categories);
//  } else if(!element.categories.includes('thiller')){
//     categorias.push(element.categories);     
//      }


    




// console.log(comedia);
// console.log(aventura);
// console.log(accion);
// console.log(animación);
// console.log(thriller);


// for (const element of movies) {
    
//     if ((element.categories.includes('comedia'))&&(!element.categories.includes('aventura'))&&(!element.categories.includes('acción'))&&(!element.categories.includes('animacion'))) {
//         categorias.push(element.categories[0]);
//     }
//     // categorias.push(element.categories)
// }

// console.log(categorias);
