//toogle menu

function toggleMenu() {
    var menuToggle = document.querySelector('.burger-menu');
    var menu = document.querySelector('#menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}


//active-item-navbar
//
//const navIems = document.getElementsByClassName("nav-item");
//
//for(var i=0; i<navIems.length; i++){
//    navIems[i].addEventListener('click', () =>{
//        this.classList.add("active")
//    })
//}

var links = document.querySelectorAll('.navbar ul li a');
links.forEach(function (element) {
  element.addEventListener('click', function (e) {
    // PreventDefault to prevent redirect
    e.preventDefault();
    links.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');
  });
});