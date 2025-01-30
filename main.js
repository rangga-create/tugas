var xstatus = true;
var nb = false;

const tombol = document.getElementById('tombol');
const Menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

tombol.addEventListener('click', () => {
    if (xstatus) {
        navbar.classList.add("bg-teal-500");
        Menu.classList.remove("hidden");
        Menu.classList.add("flex");
        xstatus = false;
     
    } else {
        if (nb == false || window.scrollY < 51) {
            navbar.classList.remove("bg-teal-500");
        }
        Menu.classList.remove("flex");
        Menu.classList.add("hidden");
        xstatus = true;
    }
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-teal-500");
        nb = true;
    } else {
        if (xstatus != false) {
            navbar.classList.remove("shadow-lg", "bg-teal-500");
            nb = false;
        }
    }
});


