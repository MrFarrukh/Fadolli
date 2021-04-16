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
    },
} ).mount();