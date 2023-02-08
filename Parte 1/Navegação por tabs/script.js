const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');
if(tabMenu.length && tabcontent.length){
  tabcontent[0].classList.add('ativo');
  function activeTab(index){
    tabcontent.forEach((section)=>{
    section.classList.remove('ativo')
    });
    tabcontent[index].classList.add('ativo');
  }
  tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener('click', () =>{
      activeTab(index);
    });
  });
}