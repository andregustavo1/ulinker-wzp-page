const btnBlack = document.getElementById('btnBlack');
const btnWhite = document.getElementById('btnWhite');

const cardBlackFront= document.getElementById('cardBlackFront');
const cardWhiteFront = document.getElementById('cardWhiteFront');

const cardBlackBack = document.getElementById('cardBlackBack');
const cardWhiteBack = document.getElementById('cardWhiteBack');

const cTaLinks = document.querySelectorAll('.cTa');

btnBlack.addEventListener('click', function() {
    btnBlack.classList.add('selected', 'box-shadow');
    btnWhite.classList.remove('selected', 'box-shadow');

    cardWhiteBack.classList.add('hidden');
    cardWhiteFront.classList.add('hidden');

    if (btnBlack.classList.contains('back')) {
        cardBlackBack.classList.remove('hidden');
    } else {
        cardBlackFront.classList.remove('hidden');
    };
});

btnWhite.addEventListener('click', function() {
    btnWhite.classList.add('selected', 'box-shadow');
    btnBlack.classList.remove('selected', 'box-shadow');

    cardBlackBack.classList.add('hidden');
    cardBlackFront.classList.add('hidden');

    if (btnWhite.classList.contains('back')) {
        cardWhiteBack.classList.remove('hidden');
    } else {
        cardWhiteFront.classList.remove('hidden');
    };
});

const btnRotate = document.getElementById('rotate');
const pRotate = btnRotate.querySelector('p');

btnRotate.addEventListener('click', function() {
    if (btnBlack.classList.contains('selected')) {
        cardBlackFront.classList.toggle('hidden');
        cardBlackBack.classList.toggle('hidden');
    };

    if (btnWhite.classList.contains('selected')) {
        cardWhiteFront.classList.toggle('hidden');
        cardWhiteBack.classList.toggle('hidden');
    };

    if (pRotate.textContent === 'Olhar trás') {
        pRotate.textContent = 'Olhar frente';
    } else {
        pRotate.textContent = 'Olhar trás';
    };

    if (pRotate.textContent === 'Olhar frente') {
        btnBlack.classList.add('back');
        btnWhite.classList.add('back');
        btnBlack.classList.remove('front');
        btnWhite.classList.remove('front');
    } else {
        btnBlack.classList.remove('back');
        btnWhite.classList.remove('back');
        btnBlack.classList.add('front');
        btnWhite.classList.add('front');
    };
});

const fileUpload = document.getElementById('file-upload');
const logoBlack = document.getElementById('logo-black');
const h1Black = logoBlack.querySelector('h1');
const logoImgBlack = document.getElementById('logo-img-black');

const logoWhite = document.getElementById('logo-white');
const h1White = logoWhite.querySelector('h1');
const logoImgWhite = document.getElementById('logo-img-white');

fileUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            logoImgBlack.src = e.target.result;
            logoImgWhite.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }

    h1Black.remove();
    h1White.remove();

    if (cardBlackFront.classList.contains('hidden') && btnBlack.classList.contains('selected') || cardWhiteFront.classList.contains('hidden') && btnWhite.classList.contains('selected')) {
        btnRotate.click();
    }
});

const inputName = document.getElementById('inputName');
const nameBlackCard = document.getElementById('nameBlackCard');
const nameWhiteCard = document.getElementById('nameWhiteCard');

inputName.addEventListener('input', function() {
    nameBlackCard.textContent = this.value;
    nameWhiteCard.textContent = this.value;

    if (this.value === '') {
        nameBlackCard.textContent = 'SEU NOME AQUI';
        nameWhiteCard.textContent = 'SEU NOME AQUI';
    }
});

document.getElementById('btnReview').addEventListener('click', function() {
    document.getElementById('review').scrollIntoView({
        behavior: 'smooth'
    });
});

const ctaBtn = document.getElementById('ctaBtn');
const floatingButton = document.getElementById('floatingButton');

const observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        floatingButton.classList.add('invisible');
        floatingButton.classList.add('opacity-0');
    } else {
        floatingButton.classList.remove('invisible');
        floatingButton.classList.remove('opacity-0');
    }
}, { threshold: 0.1 });

observer.observe(ctaBtn);

const sliders = document.querySelectorAll('#slider img');
const navs = document.querySelectorAll('#slider-nav a');

navs.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sliderId = this.getAttribute('href');
        const slider = document.querySelector(sliderId);
        slider.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

const siliderImg = document.querySelectorAll('#slider-img a');

siliderImg.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sliderId = this.getAttribute('href');
        const slider = document.querySelector(sliderId);
        slider.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

const observerNav = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const nav = document.getElementById(`slider-nav-${id.split('-')[1]}`);
            nav.classList.add('bg-blue-500'); 
            nav.classList.remove('bg-slate-200');
        } else {
            const id = entry.target.id;
            const nav = document.getElementById(`slider-nav-${id.split('-')[1]}`);
            nav.classList.remove('bg-blue-500');
            nav.classList.add('bg-slate-200');
        }
    });
}, { threshold: 0.5 });

sliders.forEach(slider => {
    observerNav.observe(slider);
});

const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const quantityElement = document.getElementById('quantity');

addButton.addEventListener('click', function() {
  let quantity = parseInt(quantityElement.textContent, 10);
  if (quantity < 10) {
    quantity += 1;
    quantityElement.textContent = quantity;
  }
});

subButton.addEventListener('click', function() {
  let quantity = parseInt(quantityElement.textContent, 10);
  if (quantity > 1) {
    quantity -= 1;
    quantityElement.textContent = quantity;
  }
});