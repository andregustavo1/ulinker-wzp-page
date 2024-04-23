document.addEventListener("DOMContentLoaded", function() {
    const primaryColorElement = document.getElementById("primary-color");
    if (primaryColorElement) {
      const primaryColor = primaryColorElement.getAttribute("data-color");
      document.documentElement.style.setProperty('--primary-color', primaryColor);
    };
});

// get url 
const currentUrl = window.location.origin + window.location.pathname;

window.onload = function() {
    let shareLink = document.getElementById('share-link');
    shareLink.href = "whatsapp://send?text=Confira meu perfil digital: " + currentUrl;
};

const logo = document.getElementById('logo').src = currentUrl + "/src/img/logo.jpg";

fetch(currentUrl + "/src/img/logo.jpg")
.then(response => response.blob())
.then(blob => {
  const reader = new FileReader();
  reader.onloadend = function() {
    let base64data = reader.result;

    // Remove the prefix from the base64 string
    base64data = base64data.replace(/^data:image\/jpeg;base64,/, "");

    // Create the vCard
    const vCard = `BEGIN:VCARD%0AVERSION:3.0%0AFN:xLinker%0ATEL;TYPE=CELL:+5511916005064%0AEMAIL:xlinker.company@xlinker.com.br%0APHOTO;ENCODING=b;TYPE=JPEG:${base64data}%0AEND:VCARD`;

    // Set the href of the vCard link
    document.getElementById('vcard').href = `data:text/vcard;charset=utf-8,${vCard}`;
  }
  reader.readAsDataURL(blob);
})
.catch(error => console.error(error));



const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', function() {
    slider.scrollLeft += 345;
});

prev.addEventListener('click', function() {
    slider.scrollLeft -= 345;
});

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

const copyBtn = document.getElementById('copyBtn');
const pixKey = document.getElementById('pixKey');

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