function slider(slides, dir, prev, next) {
  let slideIndex = 1; //текущий слайд
  const items = selectorAll(slides),
  prevBtn = selector,
  nextBtn = selector;

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(element => {
      element.style.display = 'none';
    });

    items[slideIndex-1].style.display = 'block';
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
}

