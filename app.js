let width = 0;
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const pics = document.querySelectorAll('.sushi');

pics.forEach(() => {
  const circle = document.createElement('div');
  circle.classList.add('dots');
  left.insertAdjacentElement('afterend', circle);
});

function changeDot() {
  const allDots = document.querySelectorAll('.dots');
  if (width === 0) {
    allDots[0].classList.add('active');
    allDots[1].classList.remove('active');
    allDots[2].classList.remove('active');
  } else if (width === -700) {
    allDots[1].classList.add('active');
    allDots[2].classList.remove('active');
    allDots[0].classList.remove('active');
  } else if (width === -1400) {
    allDots[2].classList.add('active');
    allDots[0].classList.remove('active');
    allDots[1].classList.remove('active');
  }
}

function selectDot() {
  const allDots = document.querySelectorAll('.dots');
  allDots[0].addEventListener('click', () => {
    width = 0;
    pics.forEach((pic) => {
      const sushi = pic;
      sushi.style.transform = `translateX(${width}px)`;
      changeDot();
    });
  });
  allDots[1].addEventListener('click', () => {
    width = -700;
    pics.forEach((pic) => {
      const sushi = pic;
      sushi.style.transform = `translateX(${width}px)`;
      changeDot();
    });
  });
  allDots[2].addEventListener('click', () => {
    width = -1400;
    pics.forEach((pic) => {
      const sushi = pic;
      sushi.style.transform = `translateX(${width}px)`;
      changeDot();
    });
  });
}

function hitNext() {
  if (width === -1400) {
    width = 0;
  } else {
    width -= 700;
  }
  pics.forEach((pic) => {
    const sushi = pic;
    sushi.style.transform = `translateX(${width}px)`;
  });
  changeDot();
  selectDot();
}

function hitPrevious() {
  if (width === 0) {
    width = -1400;
  } else {
    width += 700;
  }
  pics.forEach((pic) => {
    const sushi = pic;
    sushi.style.transform = `translateX(${width}px)`;
  });
  changeDot();
}

setInterval(hitNext, 5000);
changeDot();
selectDot();

left.addEventListener('click', hitPrevious);
right.addEventListener('click', hitNext);
