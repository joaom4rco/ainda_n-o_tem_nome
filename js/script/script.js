// const carrossel = document.querySelector('.carrossel-grid');
// const prevButton = document.querySelector('.anterior-button');
// const nextButton = document.querySelector('.proximo-button');
// const items = document.querySelectorAll('.carrossel-item');

// let currentIndex = 0;

// function nextItem() {
//   if (currentIndex < items.length - 1) {
//     currentIndex++;
//     translateCarrossel();
//   }
// }

// function prevItem() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     translateCarrossel();
//   }
// }

// function translateCarrossel() {
//   const translateValue = -currentIndex * 50; // 100% de deslocamento por item
//   carrossel.style.transform = `translateX(${translateValue}%)`;
// }

// prevButton.addEventListener('click', prevItem);
// nextButton.addEventListener('click', nextItem);