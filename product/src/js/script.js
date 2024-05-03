const btnBlack = document.getElementById('btnBlack');
const btnWhite = document.getElementById('btnWhite');

const cardBlack = document.getElementById('cardBlack');
const cardBlackBack = document.getElementById('cardBlackBack');
const cardBlackFront= document.getElementById('cardBlackFront');

const cardWhite = document.getElementById('cardWhite');
const cardWhiteFront = document.getElementById('cardWhiteFront');
const cardWhiteBack = document.getElementById('cardWhiteBack');

const rotate = document.getElementById('rotate');
const rotateText = document.getElementById('rotate-text');

rotate.addEventListener('click', function() {
    if (rotateText.textContent === 'Olhar trás') {
        rotateText.textContent = 'Olhar frente';
    } else {
        rotateText.textContent = 'Olhar trás';
    };
});

const cTa = document.querySelectorAll('.cTa');

rotate.addEventListener('click', function() {
    cardBlack.classList.toggle('flip');
    cardWhite.classList.toggle('flip');
});

btnBlack.addEventListener('click', function() {
    btnBlack.classList.add('selected', 'box-shadow');
    btnWhite.classList.remove('selected', 'box-shadow');

    cardBlack.classList.remove('hidden');
    cardWhite.classList.add('hidden');

    cTa.forEach(link => {
        link.href = 'https://seguro.xlinker.com.br/r/50X7QU3TVC';
    });
});

btnWhite.addEventListener('click', function() {
    btnWhite.classList.add('selected', 'box-shadow');
    btnBlack.classList.remove('selected', 'box-shadow');

    cardWhite.classList.remove('hidden');
    cardBlack.classList.add('hidden');

    cTa.forEach(link => {
        link.href = 'https://seguro.xlinker.com.br/r/RUK2YRCJDX';
    });
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

    if (!cardBlack.classList.contains('flip') && btnBlack.classList.contains('selected') || !cardWhite.classList.contains('flip') && btnWhite.classList.contains('selected')) {
        rotate.click();
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

document.getElementById('btn-to-review').addEventListener('click', function() {
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

const reviewBtn = document.getElementById('btn-review');
const reviewMsg = document.getElementById('review-msg');
const reviewClose = document.getElementById('review-close');
const blur = document.getElementById('blur');

reviewBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    reviewMsg.classList.remove('hidden');
    blur.classList.remove('hidden');
});

function closeMsg() {
    reviewMsg.classList.add('hidden');
    blur.classList.add('hidden');
}

reviewClose.addEventListener('click', function() {
    closeMsg()
});

document.addEventListener('click', function(event) {
    if (!reviewMsg.contains(event.target)) {
        closeMsg();
    }
});