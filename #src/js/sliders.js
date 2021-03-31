@@include('./libs/swiper-bundle.js', {})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    },
});