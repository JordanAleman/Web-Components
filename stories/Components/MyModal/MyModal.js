export class MyModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    connectedCallback() {
        this.render();
        this.toggleEventListeners('add');
    }

    disconnectedCallback() {
        this.toggleEventListeners('remove');
    }

    toggleEventListeners(action) {
        const closeButton = this.shadowRoot.querySelector('.close-button');
        const confirmButton = this.shadowRoot.querySelector('.confirm-button');
        const closeModalButton = this.shadowRoot.querySelector('.close-modal-button');
        const backdrop = this.shadowRoot.querySelector('.backdrop');
        const modalElement = this.shadowRoot.querySelector('.modal');
        const slots = this.shadowRoot.querySelectorAll('slot');  // Selecciona todos los slots
    
        const method = action === 'add' ? 'addEventListener' : 'removeEventListener';
    
        closeButton[method]('click', this.closeModal.bind(this));
        if (confirmButton) confirmButton[method]('click', this.confirmAction.bind(this));
        closeModalButton[method]('click', this.closeModal.bind(this));
    
        // Adjust the backdrop click event to check if the click is outside the modal and the slot content
        backdrop[method]('click', (event) => {
            // Verificar si el clic fue dentro del modal o en alguno de los nodos asignados a cualquier slot
            const isClickInsideModal = modalElement.contains(event.target);
            const isClickInsideAnySlot = Array.from(slots).some(slot => 
                slot.assignedNodes().some(node => node.contains(event.target))
            );
    
            if (!isClickInsideModal && !isClickInsideAnySlot) {
                this.closeModal();
            }
        });
    }
   
    closeModal() {
        this.removeAttribute('open');
    }

    confirmAction() {
        // Puedes emitir un evento personalizado si necesitas hacer algo específico en la confirmación
        this.dispatchEvent(new CustomEvent('confirm', {
            detail: { message: 'Modal confirmado' }
        }));
        this.closeModal();
    }

    render() {
        const hideConfirmButton = this.hasAttribute('hideConfirmButton');
        const hideCloseButton = this.hasAttribute('hideCloseButton');

        this.shadowRoot.innerHTML = `
            <style>
                .backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: none;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal {
                    background: white;
                    border-radius: 8px;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    z-index: 1001;
                }
                .modal-header, .modal-footer {
                    padding: 16px;
                    border-bottom: 1px solid #eee;
                }
                .modal-header {
                    display: flex;
                    justify-content: flex-end;
                }
                .close-button {
                    background: none;
                    border: none;
                    font-size: 18px;
                    cursor: pointer;
                }
                .modal-content {
                    padding: 16px;
                }
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 8px;
                    border-top: 1px solid #eee;
                }
                .modal-footer button {
                    padding: 8px 16px;
                    cursor: pointer;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                }
                .confirm-button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                }
                .close-modal-button {
                    background-color: #ddd;
                    color: black;
                }

                :host([open]) .backdrop {
                    display: flex;
                }
            </style>

            <div class="backdrop">
                <div class="modal">
                    <div class="modal-header">
                        <button class="close-button">&times;</button>
                    </div>
                    <div class="modal-content">
                        <slot name="content">Contenido del modal</slot>
                    </div>
                    <div class="modal-footer">
                        ${!hideConfirmButton ? '<button class="confirm-button">Confirmar</button>' : ''}
                        ${!hideCloseButton ? '<button class="close-modal-button">Cerrar</button>' : ''}
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('my-modal', MyModal);
