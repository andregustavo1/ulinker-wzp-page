const menuButton = document.getElementById("menu-btn");
const menu = document.querySelector("#menu");
var icon = document.querySelector("#menu-btn i");
const header = document.querySelector("header");
const headerContainer = header.querySelector("#container");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("max-h-[442px]");
    menu.classList.toggle("shadow-md");
    headerContainer.classList.toggle("shadow-md");
    menu.classList.toggle("bg-white");
    menu.classList.toggle("max-h-0");
    menu.classList.toggle("open");
    icon.classList.toggle("ri-menu-line");
    icon.classList.toggle("ri-close-large-line");
});

function closeMenu() {
    menu.classList.remove("max-h-[442px]", "open");
    menu.classList.add("max-h-0");
    menu.classList.remove("bg-white");
    menu.classList.remove("shadow-md");
    headerContainer.classList.add("shadow-md");
    icon.classList.remove("ri-close-large-line");
    icon.classList.add("ri-menu-line");
}

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !header.contains(event.target) && menu.classList.contains("open")) {
        closeMenu();
    }
});

window.addEventListener('scroll', function() {
  if (menu.classList.contains("open")) {
      closeMenu();
  }
});

// Code for scroll to element
document.querySelectorAll('.btnFaq').forEach(function(btnFaq) {
  btnFaq.addEventListener('click', function() {
      const faq = document.getElementById('faq');
      const faqPosition = faq.getBoundingClientRect().top + window.pageYOffset;
      const scrollToPosition = faqPosition - faq.offsetHeight * 0.1;
      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
  });
});

// Code for animation scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('-translate-x-full');
          entry.target.classList.remove('translate-x-full');
      }
  });
}, {
  rootMargin: '-30% 0px'
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

// Code for infinite draggable slider
const wrapper = document.getElementById("wrapper");
const slider = document.getElementById("slider");
const firstCardWidth = slider.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll("button");
const sliderChildrens = [...slider.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the slider at once
let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of slider for infinite scrolling
sliderChildrens.slice(-cardPerView).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of slider for infinite scrolling
sliderChildrens.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the slider at appropriate postition to hide first few duplicate cards on Firefox
slider.classList.add("no-transition");
slider.scrollLeft = slider.offsetWidth;
slider.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the slider left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slider.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    // Records the initial cursor and scroll position of the slider
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the slider based on the cursor movement
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the slider is at the beginning, scroll to the end
    if(slider.scrollLeft === 0) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
        slider.classList.remove("no-transition");
    }
    // If the slider is at the end, scroll to the beginning
    else if(Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over slider
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the slider after every 2500 ms
    timeoutId = setTimeout(() => slider.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
slider.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// Code for FAQ
const faq1 = document.getElementById("faq1");
const faqAnswer1 = document.getElementById("faqAnswer1");

faq1.addEventListener("click", function () {
  faqAnswer1.classList.toggle("max-h-0");
  faqAnswer1.classList.toggle("max-h-[48px]");
  faq1.classList.toggle("rotate-[-45deg]");
  faq1.classList.toggle("bg-[#8234E9]");
  faq1.classList.toggle("text-white");
});

const faq2 = document.getElementById("faq2");
const faqAnswer2 = document.getElementById("faqAnswer2");

faq2.addEventListener("click", function () {
  faqAnswer2.classList.toggle("max-h-0");
  faqAnswer2.classList.toggle("max-h-[144px]");
  faqAnswer2.classList.toggle("xl:max-h-[96px]");
  faq2.classList.toggle("rotate-[-45deg]");
  faq2.classList.toggle("bg-[#8234E9]");
  faq2.classList.toggle("text-white");
});

const faq3 = document.getElementById("faq3");
const faqAnswer3 = document.getElementById("faqAnswer3");

faq3.addEventListener("click", function () {
  faqAnswer3.classList.toggle("max-h-0");
  faqAnswer3.classList.toggle("max-h-[144px]");
  faqAnswer3.classList.toggle("xl:max-h-[96px]");
  faq3.classList.toggle("rotate-[-45deg]");
  faq3.classList.toggle("bg-[#8234E9]");
  faq3.classList.toggle("text-white");
});

const faq4 = document.getElementById("faq4");
const faqAnswer4 = document.getElementById("faqAnswer4");

faq4.addEventListener("click", function () {
  faqAnswer4.classList.toggle("max-h-0");
  faqAnswer4.classList.toggle("max-h-[168px]");
  faqAnswer4.classList.toggle("xl:max-h-[120px]");
  faq4.classList.toggle("rotate-[-45deg]");
  faq4.classList.toggle("bg-[#8234E9]");
  faq4.classList.toggle("text-white");
});

const faq5 = document.getElementById("faq5");
const faqAnswer5 = document.getElementById("faqAnswer5");

faq5.addEventListener("click", function () {
  faqAnswer5.classList.toggle("max-h-0");
  faqAnswer5.classList.toggle("max-h-[144px]");
  faqAnswer5.classList.toggle("xl:max-h-[96px]");
  faq5.classList.toggle("rotate-[-45deg]");
  faq5.classList.toggle("bg-[#8234E9]");
  faq5.classList.toggle("text-white");
});

const faq6 = document.getElementById("faq6");
const faqAnswer6 = document.getElementById("faqAnswer6");

faq6.addEventListener("click", function () {
  faqAnswer6.classList.toggle("max-h-0");
  faqAnswer6.classList.toggle("max-h-[144px]");
  faqAnswer6.classList.toggle("xl:max-h-[96px]");
  faq6.classList.toggle("rotate-[-45deg]");
  faq6.classList.toggle("bg-[#8234E9]");
  faq6.classList.toggle("text-white");
});

const faq7 = document.getElementById("faq7");
const faqAnswer7 = document.getElementById("faqAnswer7");

faq7.addEventListener("click", function () {
  faqAnswer7.classList.toggle("max-h-0");
  faqAnswer7.classList.toggle("max-h-[144px]");
  faqAnswer7.classList.toggle("xl:max-h-[96px]");
  faq7.classList.toggle("rotate-[-45deg]");
  faq7.classList.toggle("bg-[#8234E9]");
  faq7.classList.toggle("text-white");
});

const faq8 = document.getElementById("faq8");
const faqAnswer8 = document.getElementById("faqAnswer8");

faq8.addEventListener("click", function () {
  faqAnswer8.classList.toggle("max-h-0");
  faqAnswer8.classList.toggle("max-h-[144px]");
  faqAnswer8.classList.toggle("xl:max-h-[96px]");
  faq8.classList.toggle("rotate-[-45deg]");
  faq8.classList.toggle("bg-[#8234E9]");
  faq8.classList.toggle("text-white");
});