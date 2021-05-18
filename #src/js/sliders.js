@@include('./libs/swiper-bundle.js', {})

const lastNewsSlider = new Swiper('.last-news__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

/*---------
Circle slider progress
---------*/

const element = document.getElementById('tm');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const options = {
    part: 0,
    nextPart: 0.25,
    size: 52,
    lineWidth: 3,
    decrease: false,
    isPartToSet: true,
    prevSlide: 0,
    isFillCircle: false,
}
canvas.width = canvas.height = options.size;
element && element.appendChild(canvas);

const radius = Math.trunc(options.size / 2 - options.lineWidth);
const center = options.size / 2;

const drawCircle = (color, lineWidth, part = 1) => {
    ctx.beginPath();
    ctx.arc(center, center, radius,
        -(Math.PI * 0.5), (Math.PI * 2) * part - Math.PI * 0.5, false);
    ctx.strokeStyle = color;
    // ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth
    ctx.stroke();
};

const animateProgress = () => {
    ctx.clearRect(0, 0, options.size, options.size);
    ctx.save();
    ctx.restore();
    drawCircle('rgba(255, 255, 255, 0.3)', options.lineWidth);
    drawCircle('#60CAE5', options.lineWidth, options.part);
    // debugger;
    if (options.decrease) {
        if (options.part > options.nextPart) {
            options.part = options.part - 0.01;
            if (options.part > -0.01 && options.part < 0.01) {
                if (options.isFillCircle) {
                    options.part = 1;
                    options.nextPart = 1;
                    options.isFillCircle = false;
                } else {
                    options.part = 0;
                    options.nextPart = 0;
                }
            }
            window.requestAnimationFrame(animateProgress);
        }
    } else {
        if (options.part < options.nextPart) {
            options.part = options.part + 0.01;
            if (options.part > 1) {
                options.part = 1;
                options.nextPart = 1;
            }
            window.requestAnimationFrame(animateProgress);
        }
    }
}

const runCircleProgress = (swiper, current, total) => {
    if (options.prevSlide === total && current === 1) {
        options.decrease = false;
        options.part = 0;
        options.nextPart = current / total;
    } else if (options.prevSlide === 1 && current === total) {
        options.decrease = true;
        options.nextPart = 0;
        options.isFillCircle = true;
    } else if (options.prevSlide === total && current === total - 1) {
        options.decrease = true;
        options.nextPart = current / total;
        options.part = 1;
    } else {
        options.decrease = current - options.prevSlide <= 0;
        options.nextPart = current / total;
    }

    options.prevSlide = current;
    window.requestAnimationFrame(animateProgress);
};
/*------
 Sliders
--------*/


const projectsHomeSlider = new Swiper('.projects__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 4.5,
    centeredSlides: true,
    initialSlide: 2,
    pagination: {
        el: '.home-projects-scrollbar',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            runCircleProgress(swiper, current, total);
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.home-projects-button-next',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        680: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3
        },
        1366: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 4.5
        },
    },
});

const projectsControlsSlider = new Swiper('.progects-detailed__titles-control-slider', {
    // Optional parameters
    loop: true,
    // slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    mousewheel: true,
    loopAdditionalSlides: 4,
    hashNavigation: {
        watchState: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.projects-button-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 2.5,
        },
        1281: {
            slidesPerView: 3.5,
        }
    }
});

const projectsSlider = new Swiper('.progects-detailed__titles-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    hashNavigation: {
        watchState: true,
    },
});

const projectsBodySlider = new Swiper('.progects-detailed__body-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    autoHeight: true,
    hashNavigation: {
        watchState: true,
    },
    pagination: {
        el: '.progects-detailed-scrollbar',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            runCircleProgress(swiper, current, total);
        }
    },

});



const whatWeDoSlider = new Swiper('.what-we-do__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const hashtagGallerySlider = new Swiper('.hashtag-gallery__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const productThumbsSlider = new Swiper('.product-thumb__slider', {
    // Optional parameters
    direction: 'vertical',
    freeMode: true,
    slidesPerView: 3,
    initialSlide: 0,
    slideToClickedSlide: true,
    speed: 500,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            spaceBetween: 0,
        },
        561: {
            spaceBetween: 30,
        },
    }
});
const productSlider = new Swiper('.product__slider', {
    // Optional parameters
    effect: 'fade',
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide: 0,
    slideToClickedSlide: true,
    speed: 700,
    simulateTouch: false,
    thumbs: {
        swiper: productThumbsSlider,
    },
});

const similarProductsSlider = new Swiper('.similar-products__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    centeredSlides: false,
    initialSlide: 0,
    pagination: {
        el: '.home-projects-scrollbar',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            runCircleProgress(swiper, current, total);
        },
    },
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
        nextEl: '.home-projects-button-next',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        // when window width is >= 640px
        780: {
            slidesPerView: 3
        },
        1340: {
            slidesPerView: 4
        },
    },
});
