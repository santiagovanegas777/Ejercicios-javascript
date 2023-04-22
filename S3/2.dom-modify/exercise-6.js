const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const getBody$$ = document.querySelector('body');
console.log(getBody$$);

const newUl$$ = document.createElement('ul');
getBody$$.appendChild(newUl$$);



const elementosLista$$ =[];
const appNodosTextos$$ = [];

   
for(let i = 0; i < apps.length; i++){
    elementosLista$$[i] = document.createElement('li');
   
    appNodosTextos$$[i] = document.createTextNode(apps[i]);

    elementosLista$$[i].appendChild(appNodosTextos$$[i]);
    
newUl$$.appendChild(elementosLista$$[i]);


}

getBody$$.appendChild(newUl$$);






// function draw(arr){
// newLi$$.innerHTML=``;
//     for (const element of arr) {
//         newLi$$.innerHTML=`${element}`;
//     }
//     newLi$$.innerHTML=``;
// }

