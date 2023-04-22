// const body$$ = document.querySelector("body");

// const newDiv$$ = document.createElement("div");
// body$$.appendChild(newDiv$$);

// const textDiv$$ = document.createTextNode("p,p,p,p,p,p");

// newDiv$$.appendChild(textDiv$$);

// console.log(body$$);
///////////////////////////////

function draw() {
  const body$$ = document.querySelector("body");
  const newDiv$$ = document.createElement("div");
  body$$.appendChild(newDiv$$);
  for (let i = 0; i < 6; i++) {
    const text$$ = document.createTextNode(`p`);
    newDiv$$.appendChild(text$$); 
  }
  console.log(body$$);
}

draw();

// function draw (){
//     // body$$.innerHTML="";
//     const newDiv  = document.createElement('div')
//   for (let i = 0; i < 7; i++){
//   const atribu = newDiv.createTextNode('p'[i]);
//   }

// }

// draw();
