class informations extends HTMLElement {
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
        const textContainer = document.createElement('div');
        textContainer.setAttribute('class', 'font-lexend mt-[72px] grid place-items-center');

        const name = document.createElement('h1');
        name.setAttribute('class', 'name text-3xl font-semibold');
        name.textContent = this.querySelector('name').textContent;

        const description = document.createElement('p');
        description.setAttribute('class', 'text-gray-700');
        description.textContent = this.querySelector('description').textContent;

        textContainer.appendChild(name);
        textContainer.appendChild(description);

        return textContainer;
    }
}

customElements.define('info-container', informations);