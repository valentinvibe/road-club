const bikes = [
              highway = {
                title: 'Шоссе',
                desc: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
                slide: 'images/slide1.png',
                sticker: 'images/i-road1.svg',
                models: [
                  {
                    name: 'Cervelo Caledonia-5',
                    image: 'images/bikes/highway/cervelo.png',
                    link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN'
                  },
                  {
                    name: 'Cannondale Systemsix Himod',
                    image: 'images/bikes/highway/cannondale.png',
                    link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J'
                  },
                  {
                    name: 'Trek Domane SL-7',
                    image: 'images/bikes/highway/trek.png',
                    link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
                  }
                ]
              },
              grevel = {
                title: 'Грэвел',
                desc: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
                slide: 'images/slide2.png',
                sticker: 'images/i-road2.svg',
                models: [
                  {
                    name: 'Cervelo Aspero GRX 810',
                    image: 'images/bikes/grevel/cervelo.png',
                    link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE'
                  },
                  {
                    name: 'Specialized S-Works Diverge',
                    image: 'images/bikes/grevel/specialized.png',
                    link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
                  },
                  {
                    name: 'Cannondale Topstone Lefty 3',
                    image: 'images/bikes/grevel/cannondale.png',
                    link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
                  }
                ],
              },
              tt = {
                title: 'TT',
                desc: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
                slide: 'images/slide3.png',
                sticker: 'images/i-road3.svg',
                models: [
                  {
                    name: 'Specialized S-Works Shiv',
                    image: 'images/bikes/tt/specialized.png',
                    link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9'
                  },
                  {
                    name: 'BMC Timemachine 01 ONE',
                    image: 'images/bikes/tt/bmc.png',
                    link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
                  },
                  {
                    name: 'Cervelo P-Series',
                    image: 'images/bikes/tt/cervelo.png',
                    link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
                  }
                ]
              }
            ];

const slides = '.slider__slide',
      prev = '.slider__btn_type_prev',
      next = '.slider__btn_type_next';
      sectionTitle = document.querySelector('.roads__title'),
      sectionSubtitle = document.querySelector('.roads__subtitle');

function slider(slides, prev, next) {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides),
        prevBtn = document.querySelector(prev),
        nextBtn = document.querySelector(next),
        container = document.querySelector('.slider__slides'),
        stickers = container.querySelectorAll('.slider__slide-sticker'),
        images = container.querySelectorAll('.slider__slide-image');
        bikesNav = document.querySelectorAll('.bikes__nav-item'),
        cards = document.querySelectorAll('.bikes__card');


  function showSlides(n) {
    let i = n + 1;
    if (n > items.length) {
      slideIndex = 1;
      i = 2;
    }

    if (n < 1) {
      slideIndex = items.length;
      i = 1;
    }

    if (n == items.length) {
      slideIndex = items.length;
      i = 1;
    }

    sectionTitle.textContent = bikes[slideIndex-1].title;
    sectionSubtitle.textContent = bikes[slideIndex-1].desc;

    images[0].src = bikes[slideIndex-1].slide;
    images[0].alt = bikes[slideIndex-1].title;
    // slide+1
    images[1].src = bikes[i-1].slide;
    images[1].alt = bikes[i-1].title;

    stickers[0].style.display = 'flex';
    stickers[0].querySelector('.slider__sticker-image').src = bikes[slideIndex-1].sticker;

    bikesNav.forEach(element => {
      element.classList.remove('bikes__nav-item_active');
    });

    bikesNav[slideIndex-1].classList.add('bikes__nav-item_active');

    cards.forEach((card,i) => {
      card.href = bikes[slideIndex-1].models[i].link;
      card.querySelector('.bikes__card-image').src = bikes[slideIndex-1].models[i].image;
      card.querySelector('.bikes__card-image').alt = bikes[slideIndex-1].models[i].name;
      card.querySelector('.bikes__card-title').textContent = bikes[slideIndex-1].models[i].name;
    })

  }

  showSlides(slideIndex); //первый вызов

  function plusSlide(n) {
    showSlides(slideIndex += n);
  }

  prevBtn.addEventListener('click', () => {
    plusSlide(-1);
  })

  nextBtn.addEventListener('click', () => {
    plusSlide(1);
  })


  document.querySelectorAll('.bikes__nav-item').forEach((item,i) => {
    item.addEventListener('click', () => {
      showSlides(i);
    });
  });
}

slider(slides,prev,next);

/* Theme Dark Switch */

const themeSwitcher = document.querySelector('.footer__btn-switch');
const page = document.querySelector('.page');
// const pageElements = document.querySelectorAll('*');

function switchBtn(target) {
  if ((target.classList.contains('switch')) || (target.closest('button').classList.contains('switch'))) {
    themeSwitcher.classList.remove('switch');
    themeSwitcher.classList.add('switch_off');
    setLightTheme();
    // page.classList.remove('page_theme_dark');
  } else {
    themeSwitcher.classList.remove('switch_off');
    themeSwitcher.classList.add('switch');
    setDarkTheme();
    // page.classList.add('page_theme_dark');
  }
}

themeSwitcher.addEventListener('click', (e) => {
  switchBtn(e.target);
});


function setDarkTheme() {
  const page = document.querySelector('.page');
  page.classList.add('page_theme_dark');
  const pageElements = page.querySelectorAll('*');
  pageElements.forEach(element => {
    if (element.classList.value.length > 0) {
      let arr = element.classList;
      arr.forEach(item => {
        let a = `${item}_theme_dark`;
        arr.add(a);
      })
    }
  });
}

function setLightTheme() {
  const page = document.querySelector('.page');
  page.classList.remove('page_theme_dark');
  const pageElements = page.querySelectorAll('*');
  pageElements.forEach(element => {
    let arr = element.classList;
    arr.forEach(item => {
      if (item.indexOf('_theme_dark') !== -1) {
        arr.remove(item);
      }
    });
    arr = element.classList;
    arr.forEach(item => {
      if (item.indexOf('_theme_dark') !== -1) {
        arr.remove(item);
      }
    });
  });
}

/* Form Submit */
const form = document.querySelector('.form'),
      input = form.querySelector('.form__input');
      btnSubmit = form.querySelector('.form__submit-btn');

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    btnSubmit.style.display = 'block';
  } else {
    btnSubmit.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  input.value = 'Круто!'
  setTimeout(() => {
    input.value = '';
    btnSubmit.style.display = 'none';
  }, 2000)
});




