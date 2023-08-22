const mainImage = document.querySelector('.main__container');
const mainImgWrapper = document.querySelector('.main__img__wrapper');
//            IMPLEMENTING PARRALAX SCROLLING.
let scrollBottom = 0; // Store previous scroll position
const minImgWrapperWidth = 25; // Minimum width in vw

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  //   adding parallax scroll on the main background image.
  mainImage.style.backgroundPositionX = scrollTop * 0.9 + 'px';

  // Calculate the change in scroll position
  const scrollChange = scrollTop - scrollBottom;

  // Calculate new width for mainImgWrapper based on scroll direction
  let newWidth = parseFloat(
    mainImgWrapper.style.width || minImgWrapperWidth + 'vw'
  );

  // Apply changes to width based on scroll direction
  if (scrollChange > 0 && newWidth > 0) {
    newWidth -= scrollChange * 0.01; // Adjust the rate of change here
  } else if (scrollChange < 0 && newWidth < 100) {
    newWidth -= scrollChange * 0.01; // Adjust the rate of change here
  }

  // Apply the new width to mainImgWrapper
  mainImgWrapper.style.width = newWidth + 'vw';

  // Update scrollBottom for the next iteration
  scrollBottom = scrollTop;
});
