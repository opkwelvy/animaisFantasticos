
//const imgs = document.querySelectorAll('img');

//imgs.forEach(function(item, index, array){
//console.log(item, index, array)
//});

const titulos = document.getElementsByClassName('titulo') //Retorna uma array-like
const titulosArray = Array.from(titulos) //Transforma em uma array de verdade

titulosArray.forEach(function(item){
  console.log(item);
})

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => { //ISSO É UMA ARROW FUNCTION
  console.log(item)
});

// Mostre no console cada parágrado do site
//const para = document.querySelectorAll('p');
//para.forEach((item) =>{
//  console.log(item);
//});
// Mostre o texto dos parágrafos no console
//para.forEach((item) => {
//  console.log(item.innerText)
//})
// Como corrigir os erros abaixo:
//const img = document.querySelectorAll('img');

//img.forEach((item, index) => {
//  console.log(item, index);
//});

//let i = 0;
//img.forEach(() => {
//  console.log(i++);
//});

//img.forEach(() => i++);

