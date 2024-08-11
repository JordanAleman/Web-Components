import { MyModal } from '../MyModal/MyModal';

class MyModalExtend extends MyModal {
    constructor() {
        super();
    }

render() {
    const modalSize = this.getAttribute('modalSize') || 'medium';
    console.log('Modal size:', modalSize); // Verifica que modalSize tiene el valor correcto

    let modalSizeChange = {
        extra_small: '300px',
        small: '400px',
        medium: '500px',
        large: '600px',
        extra_large: '700px',
    };

    // Llamar al método de renderizado del componente base
    super.render();

    // Verificar si los estilos se están aplicando correctamente
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            max-width: ${modalSizeChange[modalSize]};
        }
    `;
    this.shadowRoot.appendChild(style);
    console.log('Applied style:', style.textContent); // Verificar el CSS aplicado
}
}

customElements.define('my-modal-extend', MyModalExtend);