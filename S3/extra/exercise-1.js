const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const getBody$$ = document.querySelector("body");

const createUl$$ = document.createElement("ul");
getBody$$.appendChild(createUl$$);

console.log(getBody$$);

const draw = () => {

  for (let i = 0; i < countries.length; i++) {
    const createLi$$ = document.createElement("li");
    createUl$$.appendChild(createLi$$);
    createLi$$.innerHTML = `${countries[i]}`;
  }
};
draw();
