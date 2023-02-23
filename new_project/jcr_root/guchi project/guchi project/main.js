//toogle menu

function toggleMenu() {
    var menuToggle = document.querySelector('.burger-menu');
    var menu = document.querySelector('#menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}



var btnContainer = document.getElementsByClassName("navbar-items");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}