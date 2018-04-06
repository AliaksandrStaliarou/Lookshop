/**
 * Created by נ4םנ on 15.01.2018.
 */

$(document).ready(function(){
    $(".slide-one").owlCarousel({
        items: 1,
        loop: true,
        responsiveClass:true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        pagination: true
    });

    $(".slide-two").owlCarousel({
        items: 4,
        loop: true,
        stagePadding: 110,
        margin: 30,
        responsiveClass:true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dots: false,
        pagination : true
    });

 /*   $(".slide-two").owlCarousel({
        items: 6,
        margin: 20,
>>>>>>> origin/master
        loop: true,
        responsiveClass:true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
<<<<<<< HEAD
        pagination: true,
        dots: false
=======
        pagination : true
>>>>>>> origin/master*/
   /* });*/

});

/*Changing clothers carousel*/
function openCarousel(elmnt, carouselName, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.querySelectorAll(".tab .tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.background = "";
        tablinks[i].style.color = "";
    }

    elmnt.style.color = color;
    elmnt.style.background = '#fd926d';
    document.getElementById(carouselName).style.display = "block";

}

document.getElementById("defaultOpen").click();



/*Carousel slide-two buttons. Changing colours*/
/*var owlNext = document.querySelector('.slide-two .owl-next');
owlNext.addEventListener('click', styleChanger);
function styleChanger() {
    owlNext.style.background = '#fd926d';
}

var carousel = document.querySelector('owl-carousel.slide-two');*/











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










