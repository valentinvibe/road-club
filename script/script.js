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
  ],
  grevel: [
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
  tt: [
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
};
