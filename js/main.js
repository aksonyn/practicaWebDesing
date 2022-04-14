//Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
let onload = document.getElementById('onload');

function menus() {
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 540) {
        nav
            .classList
            .remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '64px';
    } else {
        nav
            .classList
            .remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '80px';
    }
}

function apertura (){
    if(cerrado){
        cerrado = false;
        menu.style.width = '0vw';
        menu.style.overflow = 'hidden';
    }else{
        menu.style.width = '30vw';
        menu.style.overflow = 'block';
        cerrado = true;
    }
}

window.addEventListener('load', function () {
    apertura();
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.targert !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    menus()
});

window.addEventListener('resize', function(){
    if(screen.width>=700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
        
    }
})

abrir.addEventListener('click', function(){
    apertura();
});