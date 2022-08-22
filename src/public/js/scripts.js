const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
});

const swiperCond = new Swiper(".conditionsContainer", {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
});
const swiperMarks = new Swiper(".rullerMarksContainer", {
    // Optional parameters
    loop: false,
    slidesPerView: 5,
    spaceBetween: 16,
    centeredSlides: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1023: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
});

if (window.matchMedia("(max-width: 1023px)").matches) {
    /* a viewport tem pelo menos 400 pixels de largura */
}
