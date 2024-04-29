// Informations
const name = 'Transuniverso';
const description = 'Transportadora';
const color = '#C40000';
const telNumber = '+55 11 94013-4501';
const email = 'atendimento@transuniverso.com.br'
const website = 'www.transuniverso.com.br';
const pix = '';

// Name
const ValueTextContainer = document.querySelector('text-container');
ValueTextContainer.setAttribute('name', `${name}`);
ValueTextContainer.setAttribute('description', `${description}`);

document.title = name;

// color
document.documentElement.style.setProperty('--primary-color',`${color}`);

// Tel
const whatsLink = document.getElementById('whats-link');
const whatsText = document.getElementById('whats-text');
whatsLink.href = `https://wa.me/${telNumber.replace(/[+ -]/g, '')}`;
whatsText.textContent = telNumber.replace(/^\+55/, '');

const telLink = document.getElementById('telLink');
telLink.href = `tel:${telNumber.replace(/[ -]/g, '')}`;

// E-mail
const emailLink = document.getElementById('email');
const emailText = document.getElementById('emailText');

emailLink.href = `mailto:${email}`;
emailText.textContent = email;

if (email === '') {
    emailLink.classList.add('hidden');
}

// Website
const websiteLink = document.getElementById('website');
websiteLink.href = `https://${website}`;

const websiteText = document.getElementById('website-text');
websiteText.textContent = website;

// Get url 
const currentUrl = window.location.origin + window.location.pathname;

window.onload = function() {
    let shareLink = document.getElementById('share-link');
    shareLink.href = "whatsapp://send?text=Confira meu perfil digital: " + currentUrl;
};

const logo = document.getElementById('logo').src = currentUrl + "/src/img/logo.jpg";

// vCard
fetch(currentUrl + "/src/img/logo.jpg")
.then(response => response.blob())
.then(blob => {
  const reader = new FileReader();
  reader.onloadend = function() {
    let base64data = reader.result;

    // Remove the prefix from the base64 string
    base64data = base64data.replace(/^data:image\/jpeg;base64,/, "");

    // Create the vCard
    const vCard = `BEGIN:VCARD%0AVERSION:3.0%0AFN:${name}%0ATEL;TYPE=CELL:${telNumber}%0AEMAIL:${email}%0APHOTO;ENCODING=b;TYPE=JPEG:${base64data}%0AEND:VCARD`;

    // Set the href of the vCard link
    document.getElementById('vcard').href = `data:text/vcard;charset=utf-8,${vCard}`;
  }
  reader.readAsDataURL(blob);
})
.catch(error => console.error(error));

// Slider

function slider() {
    if (document.getElementById('slider')) {
        const slider = document.getElementById('slider');
        const next = document.getElementById('next');
        const prev = document.getElementById('prev');

        next.addEventListener('click', function() {
            slider.scrollLeft += 345;
        });

        prev.addEventListener('click', function() {
            slider.scrollLeft -= 345;
        });
    }
}

slider();

const container = document.getElementById('container');
const pixBtn = document.getElementById('pixBtn');
const pixArea = document.getElementById('pixArea');

const back = document.getElementById('back');

pixBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    pixArea.classList.remove('hidden');
    back.classList.remove('opacity-0');
    window.scrollTo(0, 0);
});

back.addEventListener('click', () => {
    container.classList.remove('hidden');
    pixArea.classList.add('hidden');
    assArea.classList.add('hidden');
    back.classList.add('opacity-0');
});

if (pix === '') {
    pixBtn.classList.add('hidden');
}

const copyBtn = document.getElementById('copyBtn');
const pixKey = document.getElementById('pixKey');

pixKey.textContent = pix;

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(pixKey.innerText);

    copyBtn.textContent = 'Copiado!';

    setTimeout(() => {
        copyBtn.textContent = 'Copiar chave PIX';
    }, 1200);
});

const assBtn = document.getElementById('assBtn');
const assArea = document.getElementById('assArea');

assBtn.addEventListener('click', () => {
    container.classList.add('hidden');
    assArea.classList.remove('hidden');
    back.classList.remove('opacity-0');
    window.scrollTo(0, 0);
});