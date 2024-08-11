import './MyModalExtend.js';

export default {
    title: 'Components/MyModalExtend',
    component: 'my-modal-extend',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Un modal personalizado con un header, contenido, y footer con uno o dos botones.',
            },
        },
    },
    argTypes: {
        modalSize: {
            control: { type: 'select' },
            options: ['extra_small', 'small', 'medium', 'large', 'extra_large'],
            description: 'Ajusta el tamaño del modal',
        },
        open: {
            control: 'boolean',
            description: 'Controla la visibilidad del modal.',
        },
        hideConfirmButton: {
            control: 'boolean',
            description: 'Muestra u oculta el botón de confirmación.',
        },
        hideCloseButton: {
            control: 'boolean',
            description: 'Muestra u oculta el botón de cierre.',
        },
        content: {
            control: 'text',
            description: 'Contenido del modal.',
        },
    },
};

const Template = (args) => {


    // Crear un contenedor para el modal y el botón usando innerHTML
    const container = document.createElement('div');



    container.innerHTML = `
      <div style="margin-top: 20px;height: 50vh;">
        <button id="openModalButton" style="padding: 10px 20px; cursor: pointer;">
          Abrir Modal
        </button>
      </div>
      <my-modal-extend id="modal">
        <div slot="content">
          ${args.content || 'Este es un mensaje del modal.'}
        </div>
      </my-modal-extend>
    `;

    // Obtener referencias a los elementos creados
    const modal = container.querySelector('#modal');
    const openModalButton = container.querySelector('#openModalButton');

    modal.setAttribute('modalSize', args.modalSize);

    if (args.hideConfirmButton) {
        modal.toggleAttribute('hideConfirmButton', args.hideConfirmButton);
    }
    if (args.hideCloseButton) {
        modal.toggleAttribute('hideCloseButton', args.hideCloseButton);
    }

    // Controlar la visibilidad inicial del modal
    if (args.open) {
        modal.setAttribute('open', '');
    }

    // Evento para abrir el modal al hacer clic en el botón
    openModalButton.addEventListener('click', () => {
        modal.setAttribute('open', '');
    });

    return container;
};

export const Default = Template.bind({});
Default.args = {
    modalSize: 'medium',
    open: false,
    hideConfirmButton: false,
    hideCloseButton: false,
    content: '¿Estás seguro de que deseas continuar?',
};
