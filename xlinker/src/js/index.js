// Code for animation scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-x-0');
        } else {
            entry.target.classList.remove('opacity-100');
            entry.target.classList.remove('translate-x-0');
        }
    });
});

const elements = document.querySelectorAll('.scroll-animation');
elements.forEach((el) => observer.observe(el));


const scrollButton = document.getElementById("scrollButton");
const destiny = document.getElementById("destiny");

scrollButton.addEventListener("click", function () {
  const duration = 500; 

  const offset = destiny.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    window.scrollTo(0, startPosition + offset * progress);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
});

const ctaElements = document.querySelectorAll('.cTa');
const destiny2 = document.getElementById("destiny2");

ctaElements.forEach(cta => {
  cta.addEventListener("click", function () {
    const offset = destiny2.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const duration = 800; // Duração da animação em milissegundos
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      window.scrollTo(0, startPosition + offset * progress);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  });
});

const faq = document.getElementById("faq1");
const faqText = document.getElementById("faqText1");

faq.addEventListener("click", function () {
  faqText.classList.toggle("max-h-0");
  faqText.classList.toggle("max-h-96");
  faq.classList.toggle("rotate-[-45deg]");
  faq.classList.toggle("bg-violet-800");
  faq.classList.toggle("text-white");
});

const faq2 = document.getElementById("faq2");
const faqText2 = document.getElementById("faqText2");

faq2.addEventListener("click", function () {
  faqText2.classList.toggle("max-h-0");
  faqText2.classList.toggle("max-h-96");
  faq2.classList.toggle("rotate-[-45deg]");
  faq2.classList.toggle("bg-violet-800");
  faq2.classList.toggle("text-white");
});

const faq3 = document.getElementById("faq3");
const faqText3 = document.getElementById("faqText3");

faq3.addEventListener("click", function () {
  faqText3.classList.toggle("max-h-0");
  faqText3.classList.toggle("max-h-96");
  faq3.classList.toggle("rotate-[-45deg]");
  faq3.classList.toggle("bg-violet-800");
  faq3.classList.toggle("text-white");
});