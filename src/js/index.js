


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

document.querySelectorAll('#slider-nav a').forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sliderId = this.getAttribute('href');
        const slider = document.querySelector(sliderId);
        slider.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

const faq1 = document.getElementById("faq1");
const faqAnswer1 = document.getElementById("faqAnswer1");

faq1.addEventListener("click", function () {
  faqAnswer1.classList.toggle("max-h-0");
  faqAnswer1.classList.toggle("max-h-96");
  faq1.classList.toggle("rotate-[-45deg]");
  faq1.classList.toggle("bg-[#8234E9]");
  faq1.classList.toggle("text-white");
});

const faq2 = document.getElementById("faq2");
const faqAnswer2 = document.getElementById("faqAnswer2");

faq2.addEventListener("click", function () {
  faqAnswer2.classList.toggle("max-h-0");
  faqAnswer2.classList.toggle("max-h-96");
  faq2.classList.toggle("rotate-[-45deg]");
  faq2.classList.toggle("bg-[#8234E9]");
  faq2.classList.toggle("text-white");
});

const faq3 = document.getElementById("faq3");
const faqAnswer3 = document.getElementById("faqAnswer3");

faq3.addEventListener("click", function () {
  faqAnswer3.classList.toggle("max-h-0");
  faqAnswer3.classList.toggle("max-h-96");
  faq3.classList.toggle("rotate-[-45deg]");
  faq3.classList.toggle("bg-[#8234E9]");
  faq3.classList.toggle("text-white");
});

const faq4 = document.getElementById("faq4");
const faqAnswer4 = document.getElementById("faqAnswer4");

faq4.addEventListener("click", function () {
  faqAnswer4.classList.toggle("max-h-0");
  faqAnswer4.classList.toggle("max-h-96");
  faq4.classList.toggle("rotate-[-45deg]");
  faq4.classList.toggle("bg-[#8234E9]");
  faq4.classList.toggle("text-white");
});

const faq5 = document.getElementById("faq5");
const faqAnswer5 = document.getElementById("faqAnswer5");

faq5.addEventListener("click", function () {
  faqAnswer5.classList.toggle("max-h-0");
  faqAnswer5.classList.toggle("max-h-96");
  faq5.classList.toggle("rotate-[-45deg]");
  faq5.classList.toggle("bg-[#8234E9]");
  faq5.classList.toggle("text-white");
});

const faq6 = document.getElementById("faq6");
const faqAnswer6 = document.getElementById("faqAnswer6");

faq6.addEventListener("click", function () {
  faqAnswer6.classList.toggle("max-h-0");
  faqAnswer6.classList.toggle("max-h-96");
  faq6.classList.toggle("rotate-[-45deg]");
  faq6.classList.toggle("bg-[#8234E9]");
  faq6.classList.toggle("text-white");
});

const faq7 = document.getElementById("faq7");
const faqAnswer7 = document.getElementById("faqAnswer7");

faq7.addEventListener("click", function () {
  faqAnswer7.classList.toggle("max-h-0");
  faqAnswer7.classList.toggle("max-h-96");
  faq7.classList.toggle("rotate-[-45deg]");
  faq7.classList.toggle("bg-[#8234E9]");
  faq7.classList.toggle("text-white");
});

const faq8 = document.getElementById("faq8");
const faqAnswer8 = document.getElementById("faqAnswer8");

faq8.addEventListener("click", function () {
  faqAnswer8.classList.toggle("max-h-0");
  faqAnswer8.classList.toggle("max-h-96");
  faq8.classList.toggle("rotate-[-45deg]");
  faq8.classList.toggle("bg-[#8234E9]");
  faq8.classList.toggle("text-white");
});