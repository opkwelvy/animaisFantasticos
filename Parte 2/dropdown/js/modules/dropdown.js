export default function initDropdown(){

}
const dropwdownMenus = document.querySelectorAll('[data-dropdown');
dropwdownMenus.forEach((menu)=> {
  ['toutchstart', 'click'].forEach((userEvent) =>{
    menu.addEventListener(userEvent, handleClick);
  })
})
function handleClick(event){
  event.preventDefault();
  this.classList.toggle('active');
  outsideClick(this,()=> {
    this.classList.remove('active');
  })
}
function outsideClick(elemente, callback){
  const outside = 'data-outside'
  const html = document.documentElement;
  html.addEventListener('click',handleOutSideClick);
  function handleOutSideClick(event){
  if(!elemente.contains(event.target)){
    html.removeEventListener('click',handleOutSideClick);
    callback();
  }
  }
}