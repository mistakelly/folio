const mainIMage = document.querySelector('.main__container');
const mainImgWrapper = document.querySelector('.main__img__wrapper');
console.log(mainImgWrapper);

window.addEventListener('scroll', function (e) {
  const scrollTop = window.scrollY;
  console.log(e);
  console.log(scrollTop);
  mainIMage.style.backgroundPositionX = scrollTop * 0.9 + 'px';
  //   mainImgWrapper.style.backgroundPosition = scrollTop * 1 + 'px';
});
