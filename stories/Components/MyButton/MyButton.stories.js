import './MyButton.js';

export default {
  title: 'Components/MyButton',
  component: 'my-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Este es un botón personalizado creado como un Web Component.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' }, // Control de color para el fondo
    disabled: { control: 'boolean' }, // Control booleano para el estado "disabled"
    fontSize: {
      control: { type: 'range', min: 10, max: 30, step: 1 }, // Control de rango para el tamaño de fuente
    },
  },
};

const Template = (args) => {
  const button = document.createElement('my-button');
  button.textContent = args.label;
  button.setAttribute('background-color', args.backgroundColor);
  button.setAttribute('font-size', `${args.fontSize}px`);
  if (args.disabled) {
    button.setAttribute('disabled', '');
  } else {
    button.removeAttribute('disabled');
  }
  return button;
};

export const Default = Template.bind({});
Default.args = {
  label: 'My Custom Button',
  backgroundColor: '#007bff',
  disabled: false,
  fontSize: 16,
};

export const WithSlotContent = Template.bind({});
WithSlotContent.args = {
  label: 'Content from Slot',
  backgroundColor: '#28a745',
  disabled: false,
  fontSize: 20,
};
