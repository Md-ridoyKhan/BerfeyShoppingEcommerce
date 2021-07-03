const header = document.querySelector('header');
const navMenu = document.querySelector('.nav');
const closeMenu = document.querySelector('.closeMenu');
const mobileMenu = document.querySelector('.mobileMenu');

mobileMenu.onclick = function(){
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}
closeMenu.onclick = function(){
    navMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
}

window.onscroll = function (){
    this.scrollY > 20 ?
    header.classList.add('active'):
    header.classList.remove('active');
};

$(document).ready(function(){

    // preloader 
    $(window).on("load", function(){
        $(".preloader").fadeOut(1000);
    });
    
    // topUp-btn
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".topUp-btn").fadeIn(1000);
        } else{
            $(".topUp-btn").fadeOut(1000);
        }
    });
    $(".topUp-btn").click(function(){
        $(" html").animate({scrollTop : 0}, 1000);
    });

});

