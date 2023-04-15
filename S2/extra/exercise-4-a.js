


const miArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const texto = "Salamandra";

function findArrayIndex(miArray,texto){
    let indice = miArray.findIndex(miArray => miArray === texto);
    console.log("El elemento está en el índice", indice);

}
findArrayIndex(miArray,texto);






