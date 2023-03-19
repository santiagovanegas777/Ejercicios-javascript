



const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];




for (let values of users){
    // console.log(values);
    if (values.years < 18) {
        console.log(`Usuario menor de edad:" ${values.name}"`)
    }
    else if (values.years >= 18) {
        console.log(`Usuario mayor de edad:" ${values.name}" `)
    }
}

