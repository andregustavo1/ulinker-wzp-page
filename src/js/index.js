const menuButton = document.getElementById("menu-btn");
const menu = document.querySelector("#menu");
var icon = document.querySelector("#menu-btn i");
const header = document.querySelector("header");

menuButton.addEventListener("click", function () {
    header.classList.toggle("border-slate-300");
    header.classList.toggle("border-transparent");
    menu.classList.toggle("max-h-[352px]");
    menu.classList.toggle("max-h-0");
    menu.classList.toggle("open");
    icon.classList.toggle("ri-menu-line");
    icon.classList.toggle("ri-close-large-line");
});

document.addEventListener('click', function(event) {

    if (!menu.contains(event.target) && !header.contains(event.target) && menu.classList.contains("open")) {
        header.classList.remove("border-slate-300");
        header.classList.add("border-transparent");
        menu.classList.remove("max-h-[352px]", "open");
        menu.classList.add("max-h-0");
        icon.classList.remove("ri-close-large-line");
        icon.classList.add("ri-menu-line");
    }
});

// // Code for animation scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('-translate-x-full');
            entry.target.classList.remove('translate-x-full');
        }
    });
});

const elements = document.querySelectorAll('.scroll-animation');
elements.forEach((el) => observer.observe(el));

let intervalId;

const startInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    update();
  }, 3000);
};

const carouselList = document.querySelector('#carouselList');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  if (newActive.tagName === 'IMG') {
    newActive = newActive.closest('.carousel__item');
  }
  var isItem = newActive && newActive.classList.contains('carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
  startInterval(); // reset the interval when an image is clicked
});

const update = function(newActive) {
  const newActivePos = newActive ? newActive.dataset.pos : 1;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

startInterval(); // start the interval when the page loads

const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', function() {
    slider.scrollLeft += 345;
});

prev.addEventListener('click', function() {
    slider.scrollLeft -= 345;
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