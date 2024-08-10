class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    display: flex;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    width: 100%;
                    max-width: 800px;
                    margin: 16px auto;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .card .image {
                    flex: 1;
                    background-color: #f4f4f4;
                    overflow: hidden;
                }
                .card .image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .card .content {
                    flex: 1;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .card .content h1 {
                    margin-top: 0;
                    font-size: 24px;
                }
                .card .content h2 {
                    margin: 0;
                    font-size: 18px;
                    color: #666;
                }
                .card .content p {
                    flex: 1;
                    margin: 16px 0;
                    font-size: 16px;
                    line-height: 1.5;
                }
                .card .content button {
                    align-self: flex-start;
                    padding: 8px 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .card .content button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <div class="image">
                    <slot name="image"></slot>
                </div>
                <div class="content">
                    <slot name="title"></slot>
                    <slot name="subtitle"></slot>
                    <slot name="content"></slot>
                    <slot name="button"></slot>
                </div>
            </div>
        `;
    }
}

// Define el nuevo elemento
customElements.define('my-card', MyCard);