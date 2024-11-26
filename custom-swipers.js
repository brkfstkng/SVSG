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

const groupSwiper = new Swiper('.swiper.is-photos', {
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    autoplay: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-g-next',
        prevEl: '.swiper-g-prev',
        },
});

  // Fade up animation

gsap.from("[data-gsap-fade='up']", {
    scrollTrigger: {
        trigger: "[data-gsap-fade='up']",
        start: "top 80%", 
        end: "bottom 20%",// Start animation when the top of each element reaches 80% of the viewport
        toggleActions: "play none none none", // Play animation when in view
    },
    duration: 1,
    y: 10,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.inOut",
});
