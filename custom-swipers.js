const eventSwiper = new Swiper('.swiper.is-events', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 16,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    }
});

const testimonialSwiper = new Swiper('.swiper.is-testimonial', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    // virtualTranslate: true,
    // cssMode: true,
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-t-next',
    prevEl: '.swiper-t-prev',
    },
});
