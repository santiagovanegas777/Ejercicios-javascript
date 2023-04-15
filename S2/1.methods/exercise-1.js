
 const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

let auxInclude = [];



  for (const value of products) {
   if (value.includes(`Camiseta`)) {
    auxInclude.push(value);
   }
  }
  console.log(auxInclude);


// let auxInclude = [];


//  for (i = 0; i < products.length; i++){
//     if (products[i].includes(`Camiseta`)){

//     auxInclude.push(products[i]);
    
//     }
//  }

//  console.log(auxInclude);