import './MyCardExtend.js';

export default {
    title: 'Components/MyCardExtend',
    component: 'my-card-extend',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Este es un componente extendido de tarjeta que añade una etiqueta de categoría encima del título y permite ocultar la imagen. También puedes ajustar la posición de la imagen, el color de fondo del contenido y ocultar el botón.',
            },
        },
    },
    argTypes: {
        imagePosition: {
            control: { type: 'select' },
            options: ['left', 'right'],
            description: 'Define la posición de la imagen en la tarjeta.',
        },
        backgroundColor: {
            control: 'color',
            description: 'Color de fondo del contenido de la tarjeta.',
        },
        hideButton: {
            control: 'boolean',
            description: 'Oculta el botón de la tarjeta si está marcado.',
        },
        hideImage: {
            control: 'boolean',
            description: 'Oculta la imagen de la tarjeta si está marcado.',
        },
        categoryLabel: {
            control: 'text',
            description: 'Texto de la etiqueta de categoría que se muestra encima del título.',
        },
    },
};

const Template = (args) => {
    const card = document.createElement('my-card-extend');

    // Asignar atributos específicos
    if (args.imagePosition) {
        card.setAttribute('image-position', args.imagePosition);
    }
    if (args.backgroundColor) {
        card.setAttribute('background-color', args.backgroundColor);
    }
    if (args.hideButton !== undefined) {
        card.toggleAttribute('hide-button', args.hideButton);
    }
    if (args.hideImage !== undefined) {
        card.toggleAttribute('hide-image', args.hideImage);
    }


    card.innerHTML = `
        <img slot="image" src="https://via.placeholder.com/400x300" alt="Placeholder Image">
        <span slot="category-label">${args.categoryLabel}</span>
        <h1 slot="title">Título del Post</h1>
        <h2 slot="subtitle">Subtítulo del Post</h2>
        <p slot="content">
        Aquí va el contenido del post. Puede ser un texto largo que describa el contenido de la tarjeta.
        </p>
        ${!args.hideButton ? '<button slot="button">Leer Más</button>' : ''}
    `;

    return card;
};

export const Default = Template.bind({});
Default.args = {
    imagePosition: 'right',
    backgroundColor: '#fff',
    hideButton: false,
    hideImage: false,
    categoryLabel: 'Categoría',
};
