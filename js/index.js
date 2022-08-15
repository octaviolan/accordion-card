const container = document.querySelector('.accordion-container');

container.addEventListener('click', function(e) {

  const element = e.target.parentElement;
  
  if(element.tagName === 'BUTTON') {

    const btns = container.querySelectorAll('.accordion-button');
    
    btns.forEach(function(btn) {

      if(btn === element) {
        
        const collapse = element.parentElement.nextElementSibling
        const item = element.parentElement.parentElement
        const height = element.parentElement.nextElementSibling.firstElementChild.getBoundingClientRect().height
       
        collapse.style.height = `${height + 9}px`;
        item.classList.add('show-text');
        
      } else {
        
        const otherCollapse = btn.parentElement.nextElementSibling
        const otherItem = btn.parentElement.parentElement

        otherCollapse.style.height = 0;
        otherItem.classList.remove('show-text');
        
      }
    })
  }
})

