const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const getBody$$ = document.querySelector("body");
const createUl$$ = document.createElement("ul");
getBody$$.appendChild(createUl$$);
const getBtn$$ = document.querySelector("button");


getBtn$$.addEventListener("click", () => {
 createUl$$.removeChild(createUl$$.children[4]);
//   createUl$$.removeChild(createUl$$.length-1);

});

const mapCountries = (countries) => {
  return countries.map((countrie) => ({
    nombre: countrie.title,
    imagen: countrie.imgUrl,
  }));
};

const draw = (mapedCountries) => {
  for (let i = 0; i < countries.length; i++) {
    const createDiv$$ = document.createElement("div");
    createDiv$$.innerHTML = `<h4>${mapedCountries[i].nombre}</h4><img src ="${mapedCountries[i].imagen}"/>`;
    const createButton$$ = document.createElement("button");
    createButton$$.classList.add("eliminar");
    createButton$$.textContent="delete";
    createUl$$.appendChild(createDiv$$);
    createDiv$$.appendChild(createButton$$);
    createButton$$.addEventListener("click", ()=> {
        createDiv$$.remove();
    })
  }
};



const init = () => {
  const mapedCountries = mapCountries(countries);

  const initDraw = draw(mapedCountries);
};

init();

console.log(getBody$$);
