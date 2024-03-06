const btnBlack = document.querySelector('#btnBlack');
const btnWhite = document.querySelector('#btnWhite');

const cardBlackFront= document.querySelector('#cardBlackFront');
const cardWhiteFront = document.querySelector('#cardWhiteFront');

const cardBlackBack = document.querySelector('#cardBlackBack');
const cardWhiteBack = document.querySelector('#cardWhiteBack');

btnBlack.addEventListener('click', function() {
    btnBlack.classList.add('selected', 'box-shadow');
    btnWhite.classList.remove('selected', 'box-shadow');

    cardWhiteBack.classList.add('hidden');
    cardWhiteFront.classList.add('hidden');

    if (this.classList.contains('selected')) {
        pRotate.textContent = 'Olhar frente';
    }

    if (cardBlackFront.classList.contains('hidden')) {
        cardBlackBack.classList.remove('hidden');
    }
});

btnWhite.addEventListener('click', function() {
    btnWhite.classList.add('selected', 'box-shadow');
    btnBlack.classList.remove('selected', 'box-shadow');

    cardBlackBack.classList.add('hidden');
    cardBlackFront.classList.add('hidden');

    if (this.classList.contains('selected')) {
        pRotate.textContent = 'Olhar frente';
    }

    if (cardWhiteFront.classList.contains('hidden')) {
        cardWhiteBack.classList.remove('hidden');
    }
});

const btnRotate = document.querySelector('#rotate');
const pRotate = btnRotate.querySelector('p');

btnRotate.addEventListener('click', function() {
    
    if (btnBlack.classList.contains('selected')) {
        cardBlackFront.classList.toggle('hidden');
        cardBlackBack.classList.toggle('hidden');
    }

    if (btnWhite.classList.contains('selected')) {
        cardWhiteFront.classList.toggle('hidden');
        cardWhiteBack.classList.toggle('hidden');
    }

    if (pRotate.textContent === 'Olhar trás') {
        pRotate.textContent = 'Olhar frente';
    } else {
        pRotate.textContent = 'Olhar trás';
    }
});

const fileUpload = document.querySelector('#file-upload');
const logoBlack = document.querySelector('#logo-black');
const h1Black = logoBlack.querySelector('h1');
const logoImgBlack = document.querySelector('#logo-img-black');

const logoWhite = document.querySelector('#logo-white');
const h1White = logoWhite.querySelector('h1');
const logoImgWhite = document.querySelector('#logo-img-white');

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

const inputName = document.querySelector('#inputName');
const nameBlackCard = document.querySelector('#nameBlackCard');
const nameWhiteCard = document.querySelector('#nameWhiteCard');

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

const ctaBtn = document.querySelector('#ctaBtn');
const floatingButton = document.querySelector('#floatingButton');

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