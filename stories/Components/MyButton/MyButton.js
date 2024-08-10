class MyButton extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  render() {
      const backgroundColor = this.getAttribute('background-color') || '#007bff';
      const fontSize = this.getAttribute('font-size') || '16px';
      const isDisabled = this.hasAttribute('disabled');
      const cursorStyle = isDisabled ? 'not-allowed' : 'pointer';

      this.shadowRoot.innerHTML = `
          <style>
              button {
                  background-color: ${backgroundColor};
                  color: white;
                  border: none;
                  padding: 10px 20px;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                  font-size: ${fontSize};
                  margin: 4px 2px;
                  cursor: ${cursorStyle};
                  border-radius: 4px;
              }
              button:hover {
                  background-color: #0056b3;
              }
              button:disabled {
                  background-color: gray;
              }
          </style>
          <button ${isDisabled ? 'disabled' : ''}>
              <slot></slot>
          </button>
      `;
  }
}

// Define el nuevo elemento
customElements.define('my-button', MyButton);
