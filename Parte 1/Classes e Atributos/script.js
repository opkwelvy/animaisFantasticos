
//const menu = document.querySelector('.menu');
//menu.classList.add('ativo, azul');
//menu.classList.remove('azul');
//menu.classList.toggle('azul');

//if(menu.classList.contains('azul')){
//  menu.classList.add('possui-azul');
//}else{
//  menu.classList.add('nao-possui-azul');
//}
//const img = document.querySelector('img');

//const a = img.getAttribute('src');
//img.setAttribute('alt', 'Raposa');
//console.log(img.hasAttribute('title'));


// Adicione a classe ativo a todos os itens do menu
const itens = document.querySelectorAll('.menu a');
console.log(itens);
itens.forEach((itens) => {
  itens.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itens.forEach((itens) => {
  itens.classList.remove('ativo');
})
itens[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  const result = img.hasAttribute('alt')
  console.log(result)
})
// Modifique o href do link externo no menu
const link = document.querySelector('[href^=https]');
link.setAttribute('href', 'https://google.com/')
console.log(link.href);
