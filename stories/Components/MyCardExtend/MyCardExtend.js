import { MyCard } from '../MyCard/MyCard';

class MyCardExtend extends MyCard {
    constructor() {
        super();
    }

    render() {
        // Obtener los atributos extendidos
        const hideImage = this.hasAttribute('hide-image');

        // Llamar al método de renderizado del componente base
        super.render();

        // Añadir funcionalidad específica para el componente extendido
        this.shadowRoot.innerHTML += `
            <style>
                .card .content .category-label {
                    font-size: 14px;
                    color: #007bff;
                    margin-bottom: 8px;
                }
                .card .image {
                    ${hideImage ? 'display: none;' : ''}
                }
            </style>
        `;

        const contentSlot = this.shadowRoot.querySelector('.content');
        contentSlot.insertAdjacentHTML('afterbegin', `
            <div class="category-label">
                <slot name="category-label"></slot>
            </div> 
            `);

    }
}

customElements.define('my-card-extend', MyCardExtend);
