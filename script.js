/**
 * Created by נ4םנ on 15.01.2018.
 */


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({

    });
});





var faSearch = document.querySelector('.searchBlock i');
faSearch.addEventListener('click', searchOpener);

function searchOpener() {
    var searchInput = document.querySelector('.searchBlock input');
    searchInput.classList.toggle("open");
}





var menu760 = document.querySelector('.menu760');
var menu = document.querySelector('.menu > ul');
var xButton = document.querySelector('.overlay .closebtn');


menu760.addEventListener('click', menuOpener);
xButton.addEventListener('click', closeNav);

function menuOpener() {
    menu.style.width = "100%";
}

function closeNav() {
    menu.style.width = "0%";
    menu.removeAttribute('style');
}





var menuItems = document.querySelectorAll(".menu > ul > li > a");
var menuLiUl = document.querySelector('.menu li ul');


    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            if (document.documentElement.clientWidth <= 760) {
                /* this.classList.toggle("active");*/
                var subMenu = this.nextElementSibling;
                if (subMenu.style.display == 'block'){
                    subMenu.style.display = 'none';

                } else {
                    subMenu.style.display = 'block';
                }
            } /*else {
                subMenu.style.display = 'block';
            }*/
            if (document.documentElement.clientWidth > 760) {
                this.nextElementSibling.style.display = 'block';
            }
        });
    }






/*var menuUl = document.querySelector('.menu .overlay');
var menuLiUl = document.querySelector('.menu li ul');
menuUl.addEventListener('click', opener);

function opener(event) {
    if (document.documentElement.clientWidth <= 760) {
        var target = event.target;
        var menuItems = document.querySelectorAll(".menu > ul > li > a");
        if (target.tagName != 'A') return;

        if (target.nextElementSibling.style.display == 'block'){
            target.nextElementSibling.style.display = 'none';
        } else {
            target.nextElementSibling.style.display = 'block';
        }
    } else {
        target.nextElementSibling.style.display = 'block';
    }
}*/










