const input$$ = document.querySelector('input');
input$$.classList.add('seleccionar');
console.log(input$$);

input$$.addEventListener("focus", () => {
    console.log(input$$.value);
})