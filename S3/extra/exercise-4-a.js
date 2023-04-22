const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const getBody$$ = document.querySelector('body');
const createUl$$ = document.createElement('ul');
getBody$$.appendChild(createUl$$);


const mapCountries = (countries) => {
    // console.log(characters);
    return countries.map((countrie) => ({
      nombre: countrie.title,
      imagen: countrie.imgUrl,
      
    }));
  };


const draw = (mapedCountries)=> {
 for (let i = 0; i < countries.length; i++) {
    // const createLi$$ = document.createElement('li');
    // createUl$$.appendChild(createLi$$);
    const createDiv$$ = document.createElement('div');
    createDiv$$.innerHTML=`<h4>${mapedCountries[i].nombre}</h4><img src ="${mapedCountries[i].imagen}"/>`;
    createUl$$.appendChild(createDiv$$);
 }


};



const init = ()=> {
    const mapedCountries = mapCountries(countries);
    // console.log(mapedCountries);
    const initDraw = draw(mapedCountries);
};

init();