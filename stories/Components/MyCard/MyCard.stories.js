import './MyCard.js';

export default {
  title: 'Example/MyCard',
  component: 'my-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este es un componente de tarjeta que muestra una imagen a la derecha y el contenido a la izquierda. Incluye un título, subtítulo, contenido y un botón.',
      },
    },
  },
};

const Template = () => {
  const card = document.createElement('my-card');

  card.innerHTML = `
    <img slot="image" src="https://via.placeholder.com/400x300" alt="Placeholder Image">
    <h1 slot="title">Título del Post</h1>
    <h2 slot="subtitle">Subtítulo del Post</h2>
    <p slot="content">
      Aquí va el contenido del post. Puede ser un texto largo que describa el contenido de la tarjeta.
    </p>
    <button slot="button">Leer Más</button>
  `;

  return card;
};

export const Default = Template.bind({});
