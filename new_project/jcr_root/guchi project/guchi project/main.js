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

const mainMenu = document.getElementById("menu");
const btns = mainMenu.getElementsByClassName("nav-item")

for (var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function (){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    }) 
    
}