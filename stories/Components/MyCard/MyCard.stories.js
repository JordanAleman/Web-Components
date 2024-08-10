import './MyCard.js';

export default {
  title: 'Example/MyCard',
  component: 'my-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este es un componente de tarjeta que muestra una imagen y el contenido. Puedes ajustar la posición de la imagen, el color de fondo del contenido y ocultar el botón.',
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
  },
};

const Template = (args) => {
    const card = document.createElement('my-card');
  
    // Asigna atributos específicos
    card.setAttribute('image-position', args.imagePosition);
    card.setAttribute('background-color', args.backgroundColor);
    if (args.hideButton) {
      card.setAttribute('hide-button', '');
    } else {
      card.removeAttribute('hide-button');
    }
  
    card.innerHTML = `
      <img slot="image" src="https://via.placeholder.com/400x300" alt="Placeholder Image">
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
};
