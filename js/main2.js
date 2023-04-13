


hamburger = document.querySelector(".menu-logo");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-col1");
    navBar.classList.toggle("active");
}


lang = document.querySelector(".lang");
lang.onclick = function () {
    langBar = document.querySelector(".nav-col3-txt-wrapper");
    langBar.classList.toggle("active");
}

navigation = document.querySelector(".navigation");
navigation.onclick = function () {
    BarNav = document.querySelector(".navigator-dubai");
    BarNav.classList.toggle("active")
}

