class grayShape extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());

        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', '/src/css/output.css');
        shadow.appendChild(linkElement);
    }

    build() {
        const grayShape = document.createElement('div');
        grayShape.setAttribute('class', 'font-lexend grid place-items-center w-[345px] bg-[#f0f0f0] py-4 rounded-3xl shadow-md mt-4');

        const slot = document.createElement('slot');
        grayShape.appendChild(slot);

        return grayShape;
    }
}

customElements.define('gray-shape', grayShape);