const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const getBody$$ = document.querySelector('body');
const createUl$$ = document.createElement('ul');
getBody$$.appendChild(createUl$$);
const getBtn$$ = document.querySelector('button');
// createUl$$.appendChild(getBtn$$);
// const createButton$$ = document.createElement('button');
// createButton$$.classList.add('eliminar');
// createUl$$.appendChild(createButton$$);



getBtn$$.addEventListener("click", ()=>{
   createUl$$.removeChild(createUl$$.children[4]);
  // for (let i = createUl$$.children.length - 1; i >= 0; i--) {
  //   createUl$$.removeChild(createUl$$.children[i]);
  // }
 
});

const mapCountries = (countries) => {

    return countries.map((countrie) => ({
      nombre: countrie.title,
      imagen: countrie.imgUrl,
      
    }));
  };


const draw = (mapedCountries)=> {
 for (let i = 0; i < countries.length; i++) {
 
    const createDiv$$ = document.createElement('div');
    createDiv$$.innerHTML=`<h4>${mapedCountries[i].nombre}</h4><img src ="${mapedCountries[i].imagen}"/>`;
    createUl$$.appendChild(createDiv$$);
 
    
 }


};


//  console.log(createButton$$);

const init = ()=> {
    const mapedCountries = mapCountries(countries);
    // console.log(mapedCountries);
    const initDraw = draw(mapedCountries);
    

};

init();

console.log(getBody$$);
