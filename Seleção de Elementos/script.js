// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
const imagens2 = document.getElementsByTagName('img');
console.log(imagens2);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const nameImagem = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(nameImagem);
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);
// Selecione o último p do site
const para = document.querySelectorAll('p');
console.log(para[para.length-1]);