// // Code for animation scroll
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('opacity-100');
//             entry.target.classList.add('translate-x-0');
//         } else {
//             entry.target.classList.remove('opacity-100');
//             entry.target.classList.remove('translate-x-0');
//         }
//     });
// });

// const elements = document.querySelectorAll('.scroll-animation');
// elements.forEach((el) => observer.observe(el));


// const scrollButton = document.getElementById("scrollButton");
// const destiny = document.getElementById("destiny");

// scrollButton.addEventListener("click", function () {
//   const duration = 500; 

//   const offset = destiny.getBoundingClientRect().top;
//   const startPosition = window.pageYOffset;
//   const startTime = performance.now();

//   const scroll = (currentTime) => {
//     const elapsedTime = currentTime - startTime;
//     const progress = Math.min(elapsedTime / duration, 1);

//     window.scrollTo(0, startPosition + offset * progress);

//     if (progress < 1) {
//       requestAnimationFrame(scroll);
//     }
//   };

//   requestAnimationFrame(scroll);
// });

// const ctaElements = document.querySelectorAll('.cTa');
// const destiny2 = document.getElementById("destiny2");

// ctaElements.forEach(cta => {
//   cta.addEventListener("click", function () {
//     const offset = destiny2.getBoundingClientRect().top;
//     const startPosition = window.pageYOffset;
//     const duration = 800; // Duração da animação em milissegundos
//     const startTime = performance.now();

//     const scroll = (currentTime) => {
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);

//       window.scrollTo(0, startPosition + offset * progress);

//       if (progress < 1) {
//         requestAnimationFrame(scroll);
//       }
//     };

//     requestAnimationFrame(scroll);
//   });
// });

const faq1 = document.getElementById("faq1");
const faqAnswer1 = document.getElementById("faqAnswer1");

faq1.addEventListener("click", function () {
  faqAnswer1.classList.toggle("max-h-0");
  faqAnswer1.classList.toggle("max-h-96");
  faq1.classList.toggle("rotate-[-45deg]");
  faq1.classList.toggle("bg-violet-800");
  faq1.classList.toggle("text-white");
});

const faq2 = document.getElementById("faq2");
const faqAnswer2 = document.getElementById("faqAnswer2");

faq2.addEventListener("click", function () {
  faqAnswer2.classList.toggle("max-h-0");
  faqAnswer2.classList.toggle("max-h-96");
  faq2.classList.toggle("rotate-[-45deg]");
  faq2.classList.toggle("bg-violet-800");
  faq2.classList.toggle("text-white");
});

// const faq3 = document.getElementById("faq3");
// const faqText3 = document.getElementById("faqText3");

// faq3.addEventListener("click", function () {
//   faqText3.classList.toggle("max-h-0");
//   faqText3.classList.toggle("max-h-96");
//   faq3.classList.toggle("rotate-[-45deg]");
//   faq3.classList.toggle("bg-violet-800");
//   faq3.classList.toggle("text-white");
// });