//go top
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
      if(document.documentElement.scrollTop > 600){
       document.querySelector('.go-top-container')
        .classList.add('show');
      }else {
        document.querySelector('.go-top-container')
        .classList.remove('show');
     }
    }
        document.querySelector('.go-top-btn')
        .addEventListener('click',() =>{
           window.scrollTo({
           top:0,
            behavior: 'smooth',
     });
  });




 