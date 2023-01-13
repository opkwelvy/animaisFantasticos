//const listaAnimais = document.querySelector('.animais-lista');
//const height = listaAnimais.scrollHeight;//Altura total
//listaAnimais.clientHeight; //alatura sem scroll e com padding
//listaAnimais.offsetHeight; //Altura com paddin e borda


//const animaisTop = listaAnimais.offsetTop;
//console.log(`A distância do topo é ${animaisTop}`);
//const raposah2 = document.querySelector('h2');
//const h2left = raposah2.offsetLeft;
//console.log(h2left);

//const rect = raposah2.getBoundingClientRect(); //Cria todas as informações de posicionamento
//console.log(rect.top);

//console.log(
//  window.innerHeight,
//  window.innerWidth,
//  window.outerHeight,
//  window.pageYOffset, //A quantidade que já deu de scroll na página
//)

//const small = window.matchMedia('(max-width: 600px');
//if(small.matches){
//  console.log('Usuário mobile');
//}else{
//  console.log('Usuário desktop');
//}
//console.log(small)

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);
// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function (){
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) =>{
  const linkWidth = link.offsetWidth;
  const linkkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkkHeight >= 48){
    console.log('Certo');
  }else{
    console.log('Falso');
  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const small = window.matchMedia('(max-width: 720px')
if(small.matches){
  menu.classList.add('menu-mobile')
}else{
  menu.classList.add('menu-desktop');
}
console.log(menu);