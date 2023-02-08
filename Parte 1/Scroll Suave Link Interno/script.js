function initTabNav(){
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
}
initTabNav();

function initAcorddion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if(accordionList.length){
    console.log(accordionList);
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    function activeAccordion(){
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }
    accordionList.forEach((item) =>{
      item.addEventListener('click', activeAccordion);
    });
  };
}
initAcorddion()

function initScrollSuave(){ 
  const linksInternos = document;querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault;
    const href = event.currentTarget.getAttribute('href'); 
    const section = document.querySelector(href);   
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  linksInternos.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
  })
} 
initScrollSuave();