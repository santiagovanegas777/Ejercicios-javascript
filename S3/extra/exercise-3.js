const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const getDiv$$ = document.querySelector("div");
const attrDiv$$ = getDiv$$.attributes;
// console.log(attrDiv$$);

const createUl$$ = document.createElement("ul");
getDiv$$.appendChild(createUl$$);

const draw = () => {
  for (let i = 0; i < cars.length; i++) {
    const createLi$$ = document.createElement("li");
    createLi$$.innerHTML = `${cars[i]}`;
    createUl$$.appendChild(createLi$$);
  }
};

draw();
