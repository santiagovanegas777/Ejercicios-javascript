// Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (const propiedad of alumns) {
    if(propiedad.T1 && propiedad.T2 == true) {
        console.log(propiedad.name + " " + "isAproved")
    } else if (propiedad.T2 && propiedad.T3 == true) {
        console.log(propiedad.name + " " + "isAproved")
    } else if (propiedad.T3 && propiedad.T1 == true) {
        console.log(propiedad.name + " " + "isAproved")
    }
};