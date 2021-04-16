new Splide( '.splide', {
    type   : 'loop',
    perPage: 5,
    perMove: 1,
    focus: 'center',
    autoplay:true,
    interval:1500,
    breakpoints: {
        768: {
            perPage: 2,
        },
        500: {
            perPage: 1,
        },
        1440: {
            perPage: 3,
        },
        1024: {
            perPage:3,
        },
    }
} ).mount();

var btn = document.querySelector('.header__span')
var menu = document.querySelector('.header__mcontainer__menu__ul ')

btn.addEventListener('click',function(){
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
        this.classList.remove('active')
    }else{
        menu.classList.add('show')
        this.classList.add('active')
    }
})