@@include('./libs/swiper-bundle.js', {})

const lastNewsSlider = new Swiper('.last-news__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

//---------

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
}
canvas.width = canvas.height = options.size;
element.appendChild(canvas);

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
    if (options.decrease) {
        if (options.part > options.nextPart) {
            options.part *= 0.98;
            window.requestAnimationFrame(animateProgress);
        }
    } else {
        if (options.part < options.nextPart) {
            options.part = options.part + 0.01;
            window.requestAnimationFrame(animateProgress);
        }
    }
}

//------


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

            if (current === 1 && options.isPartToSet) {
                options.part = 0;
                options.isPartToSet = false;
            }

            if (current === 5) {
                options.isPartToSet = true;
            }

            options.nextPart = current / total;

            window.requestAnimationFrame(animateProgress);
        }
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
