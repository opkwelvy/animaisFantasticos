// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');
console.log(links);
function adicionarClasse(event){
  event.preventDefault();
  links.forEach((item) =>{
    item.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}
links.forEach((links) => {
  links.addEventListener('click', adicionarClasse)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const tudo = document.querySelectorAll('body *');
function posicao(event){
  event.target.remove()

}
tudo.forEach((tudo) =>{
  tudo.addEventListener('click',posicao);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('fontemaior')
  }
}
window.addEventListener('keydown', handleClickT)