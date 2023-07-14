//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

//show mobile menu 
const menuButton = document.querySelector('.trigger');
      closeButton = document.querySelector('.t-close');
      addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click' , function(){
    addClass.classList.remove('showmenu')
})


//show sub menu on mobile 
// const submenu = document.querySelectorAll('.hasshoo');
// function showmenu(){
//   if(submenu.style.display != 'block'){
//     submenu.style.display = 'block'
//   } 
//   else{
//     submenu.style.display = 'none'
//   }
// };

// function toggle(e) {
//     e.preventDefault();
//     submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
//     if(this.closest('.has-child').classList != 'expand');
//     this.closest('.has-child').classList.toggle('expand')
// }


//Testing
const checkuu1 = document.getElementById('check1');
const testuu1 = document.getElementById('test1')
 function abbi1(){
     const checkuu1 = document.getElementById('check1');
     const testuu1 = document.getElementById('test1');
   if (checkuu1.style.maxHeight != '2000px' ){
     checkuu1.style.maxHeight = '2000px'
   }
   else{
     checkuu1.style.maxHeight = '0';
   }
   if (testuu1.style.transform != 'rotate(-90deg)'){
    testuu1.style.transform = 'rotate(-90deg)'
   }
   else{
    testuu1.style.transform = 'rotate(90deg)'
   }
  }
  const checkuu2 = document.getElementById('check2');
  const testuu2 = document.getElementById('test2')
  function abbi2(){
   if (checkuu2.style.maxHeight!='2000px'){
     checkuu2.style.maxHeight = '2000px';
   }
   else{
     checkuu2.style.maxHeight = '0'
   }
  if (testuu2.style.transform != 'rotate(-90deg)'){
   testuu2.style.transform = 'rotate(-90deg)'
  }
  else{
   testuu2.style.transform = 'rotate(90deg)'
  }
}

     const checkuu3 = document.getElementById('check3');
     const testuu3 = document.getElementById('test3')
     function abbi3(){
   if (checkuu3.style.maxHeight != '2000px'){
     checkuu3.style.maxHeight = '2000px';
   }
   else{
     checkuu3.style.maxHeight = '0'
   }
  if (testuu3.style.transform != 'rotate(-90deg)'){
   testuu3.style.transform = 'rotate(-90deg)'
  }
  else{
   testuu3.style.transform = 'rotate(90deg)'
  }
}

     const checkuu4 = document.getElementById('check4');
     const testuu4 = document.getElementById('test4');
     function abbi4(){
   if (checkuu4.style.maxHeight!='2000px'){
     checkuu4.style.maxHeight = '2000px';
   }
   else{
     checkuu4.style.maxHeight = '0'
   }
  if (testuu4.style.transform != 'rotate(-90deg)'){
   testuu4.style.transform = 'rotate(-90deg)'
  }
  else{
   testuu4.style.transform = 'rotate(90deg)'
  }
 }



//Add slider

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});




