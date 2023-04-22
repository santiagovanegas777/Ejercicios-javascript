// const getDiv$$ = document.querySelector('div');


// const newP$$ = document.createElement('p');
// getDiv$$.appendChild(newP$$);

// newP$$.textContent="Voy en medio!";
// console.log(getDiv$$);

///////////////////////////////////////
const getBody$$ = document.querySelector('body');
 const getDiv$$ = document.querySelector('div');
//  getDiv$$.setAttribute("id", "primero");
//  const getDiv2$$ = document.querySelector('div');
//  getDiv2$$.setAttribute("id", "segundo");
 const newP$$ = document.createElement('p');
 const textP$$ = document.createTextNode('Voy en medio!!');
 newP$$.appendChild(textP$$);


 getDiv$$.insertAdjacentElement("afterend", newP$$);


 console.log(getBody$$);