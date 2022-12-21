// ================= swiper-slider ==================
new Swiper('.destination-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.destination__swiper-nav-next',
        prevEl: '.destination__swiper-nav-prev',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    speed: 1000,

    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }

});

// ================= offers-slider ==================
new Swiper('.offers-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.offers__swiper-nav-next',
        prevEl: '.offers__swiper-nav-prev',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    speed: 1000,

    breakpoints: {
        1320: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }

});

// ================== gallery-swiper ====================
new Swiper('.gallery-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.gallery__swiper-nav-next',
        prevEl: '.gallery__swiper-nav-prev',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    speed: 1000,

    breakpoints: {
        1320: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }

});

// =================reviews-swiper
new Swiper('.reviews-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.reviews__swiper-nav-next',
        prevEl: '.reviews__swiper-nav-prev',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    speed: 1000,

    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }

});