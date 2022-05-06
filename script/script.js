// function slider(slides, dir, prev, next) {
//   let slideIndex = 1; //текущий слайд
//   const items = selectorAll(slides),
//   prevBtn = selector,
//   nextBtn = selector;

//   function showSlides(n) {
//     if (n > items.length) {
//       slideIndex = 1;
//     }

//     if (n < 1) {
//       slideIndex = items.length;
//     }

//     items.forEach(element => {
//       element.style.display = 'none';
//     });

//     items[slideIndex-1].style.display = 'block';
//   }

//   showSlides(slideIndex); //первый вызов

//   function plusSlide(n) {
//     showSlides(slideIndex += n);
//   }

//   prevBtn.addEventListener('click', () => {
//     plusSlide(-1);
//   })

//   nextBtn.addEventListener('click', () => {
//     plusSlide(1);
//   })
// }

const bikes = {
  highway: [
    {
      name: 'Cervelo Caledonia-5',
      src: 'images/bikes/highway/cervelo.png'
    },
    {
      name: 'Cannondale Systemsix Himod',
      src: 'images/bikes/highway/cannondale.png'
    },
    {
      name: 'Trek Domane SL-7',
      src: 'images/bikes/highway/trek.png'
    }
  ],
  grevel: [
    {
      name: 'Cervelo Aspero GRX 810',
      src: 'images/bikes/grevel/cervelo.png'
    },
    {
      name: 'Specialized S-Works Diverge',
      src: 'images/bikes/grevel/specialized.png'
    },
    {
      name: 'Cannondale Topstone Lefty 3',
      src: 'images/bikes/grevel/cannondale.png'
    }
  ],
  tt: [
    {
      name: 'Specialized S-Works Shiv',
      src: 'images/bikes/tt/specialized.png'
    },
    {
      name: 'BMC Timemachine 01 ONE',
      src: 'images/bikes/tt/bmc.png'
    },
    {
      name: 'Cervelo P-Series',
      src: 'images/bikes/tt/cervelo.png'
    }
  ]
};
