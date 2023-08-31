const mainContainer = document.querySelector('.main__container');
const sectionAbout = document.getElementById('about');
const sectionSkills = document.querySelector('.section__skills');
const sectionContact = document.querySelector('.section__contact-me');

const mainImgWrapper = document.querySelector('.main__img__wrapper');
const scrollIcon = document.getElementById('iconUser');
const mainIcon = document.querySelector('.main__icons');

//  BEGINNER LOGIC

// mainIcon.addEventListener('click', function (e) {
//   const target = e.target;
//   const scroll = scrollIntoView({ behavior: 'smooth' });
//   console.log('love');
//   console.log(target);
//   if (target.classList.contains('fa-house')) {
//     mainContainer.scrollIntoView({ behavior: 'smooth' });
//   } else if (target.classList.contains('fa-user')) {
//     sectionAbout.scrollIntoView({ behavior: 'smooth' });
//   } else if (target.classList.contains('fa-clipboard')) {
//     sectionSkills.scrollIntoView({ behavior: 'smooth' });
//   } else if (target.classList.contains('fa-phone-volume')) {
//     sectionContact.scrollIntoView({ behavior: 'smooth' });
//   }
// });

// WHEN I GREW A LITTLE LOGIC

// mainIcon.addEventListener('click', function (e) {
//   // Get the clicked target element
//   const target = e.target;

//   // Use an object to map icons to their respective sections
//   const iconToSectionMap = {
//     'fa-house': mainContainer,
//     'fa-user': sectionAbout,
//     'fa-clipboard': sectionSkills,
//     'fa-phone-volume': sectionContact,
//   };

//   // Check if the target's class matches any icon class
//   const targetClassList = target.classList;

//   console.log(iconToSectionMap);
//   console.log(targetClassList);

//   for (const iconClass in iconToSectionMap) {
//     if (targetClassList.contains(iconClass)) {
//       // Scroll to the corresponding section
//       const targetSection = iconToSectionMap[iconClass];
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//       break; // Exit the loop after finding a match
//     }
//   }
// });

// console.log(targetClassList);
// console.log(Object.keys(iconToSectionMap));

// Object.keys(iconToSectionMap).forEach(iconClass => {
//   if (targetClassList.contains(iconClass)) {
//     console.log(iconClass);
//     const targetSection = iconToSectionMap[iconClass];
//     // console.log(targetSection);
//     targetSection.scrollIntoView({ behavior: 'smooth' });
//   }
// });
// console.log(iconToSectionMap);

mainIcon.addEventListener('click', function (e) {
  const target = e.target;
  const targetClassList = target.classList;

  const iconToSectionMap = {
    'fa-house': mainContainer,
    'fa-user': sectionAbout,
    'fa-clipboard': sectionSkills,
    'fa-phone-volume': sectionContact,
  };

  Object.keys(iconToSectionMap).forEach(key => {
    if (targetClassList.contains(key)) {
      const section = iconToSectionMap[key];
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//            IMPLEMENTING PARRALAX SCROLLING.
let scrollBottom = 0; // Store previous scroll position
const minImgWrapperWidth = 25; // Minimum width in vw

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  //   adding parallax scroll on the main background image.
  mainContainer.style.backgroundPositionX = scrollTop * 0.9 + 'px';

  // // Calculate the change in scroll position
  // const scrollChange = scrollTop - scrollBottom;

  // // Calculate new width for mainImgWrapper based on scroll direction
  // let newWidth = parseFloat(
  //   mainImgWrapper.style.width || minImgWrapperWidth + 'vw'
  // );

  // // Apply changes to width based on scroll direction
  // if (scrollChange > 0 && newWidth > 0) {
  //   newWidth -= scrollChange * 0.01; // Adjust the rate of change here
  // } else if (scrollChange < 0 && newWidth < 100) {
  //   newWidth -= scrollChange * 0.01; // Adjust the rate of change here
  // }

  // // Apply the new width to mainImgWrapper
  // mainImgWrapper.style.width = newWidth + 'vw';

  // // Update scrollBottom for the next iteration
  // scrollBottom = scrollTop;
});

// PRACTICE

//
// mainIcon.addEventListener('click', function (e) {
//   const target = e.target;
//   console.log('love');
//   console.log(target);

//   const iconToSectionMap = {
//     'fa-house': mainContainer,
//     'fa-user': sectionAbout,
//     'fa-clipboard': sectionSkills,
//     'fa-phone-volume': sectionContact,
//   };

//   const targetClassList = target.classList;
//   console.log(Object.keys(iconToSectionMap));

//   Object.keys(iconToSectionMap).forEach(iconClass => {
//     if (targetClassList.contains(iconClass)) {
//       const targetSection = iconToSectionMap[iconClass];
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });
