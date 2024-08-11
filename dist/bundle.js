(()=>{var n={721:()=>{class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const n=this.getAttribute("background-color")||"#007bff",t=this.getAttribute("font-size")||"16px",e=this.hasAttribute("disabled"),o=e?"not-allowed":"pointer";this.shadowRoot.innerHTML=`\n          <style>\n              button {\n                  background-color: ${n};\n                  color: white;\n                  border: none;\n                  padding: 10px 20px;\n                  text-align: center;\n                  text-decoration: none;\n                  display: inline-block;\n                  font-size: ${t};\n                  margin: 4px 2px;\n                  cursor: ${o};\n                  border-radius: 4px;\n              }\n              button:hover {\n                  background-color: #0056b3;\n              }\n              button:disabled {\n                  background-color: gray;\n              }\n          </style>\n          <button ${e?"disabled":""}>\n              <slot></slot>\n          </button>\n      `}}customElements.define("my-button",n)}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return n[o](s,s.exports,e),s.exports}(()=>{"use strict";e(721);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const n=this.getAttribute("image-position")||"right",t=this.getAttribute("background-color")||"#fff",e=this.hasAttribute("hide-button"),o="left"===n?"order-left":"order-right";this.shadowRoot.innerHTML=`\n            <style>\n                .card {\n                    display: flex;\n                    flex-direction: row;\n                    border: 1px solid #ddd;\n                    border-radius: 8px;\n                    overflow: hidden;\n                    width: 100%;\n                    max-width: 800px;\n                    margin: 16px auto;\n                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n                }\n                .card .image {\n                    flex: 1;\n                    background-color: #f4f4f4;\n                    overflow: hidden;\n                }\n                .card .image img {\n                    width: 100%;\n                    height: auto;\n                    display: block;\n                }\n                .card .content {\n                    flex: 1;\n                    padding: 16px;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: space-between;\n                    background-color: ${t};\n                }\n                .card .content h1 {\n                    margin-top: 0;\n                    font-size: 24px;\n                }\n                .card .content h2 {\n                    margin: 0;\n                    font-size: 18px;\n                    color: #666;\n                }\n                .card .content p {\n                    flex: 1;\n                    margin: 16px 0;\n                    font-size: 16px;\n                    line-height: 1.5;\n                }\n                .card .content button {\n                    align-self: flex-start;\n                    padding: 8px 16px;\n                    background-color: #007bff;\n                    color: white;\n                    border: none;\n                    border-radius: 4px;\n                    cursor: pointer;\n                }\n                .card .content button:hover {\n                    background-color: #0056b3;\n                }\n                /* Estilos para cambiar el orden de los elementos */\n                .order-left {\n                    order: 0;\n                }\n                .order-right {\n                    order: 1;\n                }\n            </style>\n            <div class="card">\n                <div class="image ${o}">\n                    <slot name="image"></slot>\n                </div>\n                <div class="content">\n                    <slot name="title"></slot>\n                    <slot name="subtitle"></slot>\n                    <slot name="content"></slot>\n                    ${e?"":'<slot name="button"></slot>'}\n                </div>\n            </div>\n        `}}customElements.define("my-card",n),customElements.define("my-card-extend",class extends n{constructor(){super()}render(){const n=this.hasAttribute("hide-image");super.render(),this.shadowRoot.innerHTML+=`\n            <style>\n                .card .content .category-label {\n                    font-size: 14px;\n                    color: #007bff;\n                    margin-bottom: 8px;\n                }\n                .card .image {\n                    ${n?"display: none;":""}\n                }\n            </style>\n        `,this.shadowRoot.querySelector(".content").insertAdjacentHTML("afterbegin",'\n            <div class="category-label">\n                <slot name="category-label"></slot>\n            </div> \n            ')}});class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.render(),this.toggleEventListeners("add")}disconnectedCallback(){this.toggleEventListeners("remove")}toggleEventListeners(n){const t=this.shadowRoot.querySelector(".close-button"),e=this.shadowRoot.querySelector(".confirm-button"),o=this.shadowRoot.querySelector(".close-modal-button"),r=this.shadowRoot.querySelector(".backdrop"),s=this.shadowRoot.querySelector(".modal"),d=this.shadowRoot.querySelectorAll("slot"),i="add"===n?"addEventListener":"removeEventListener";t[i]("click",this.closeModal.bind(this)),e&&e[i]("click",this.confirmAction.bind(this)),o[i]("click",this.closeModal.bind(this)),r[i]("click",(n=>{const t=s.contains(n.target),e=Array.from(d).some((t=>t.assignedNodes().some((t=>t.contains(n.target)))));t||e||this.closeModal()}))}closeModal(){this.removeAttribute("open")}confirmAction(){this.dispatchEvent(new CustomEvent("confirm",{detail:{message:"Modal confirmado"}})),this.closeModal()}render(){const n=this.hasAttribute("hideConfirmButton"),t=this.hasAttribute("hideCloseButton");this.shadowRoot.innerHTML=`\n            <style>\n                .backdrop {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                    background: rgba(0, 0, 0, 0.5);\n                    display: none;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 1000;\n                }\n                .modal {\n                    background: white;\n                    border-radius: 8px;\n                    max-width: 500px;\n                    width: 90%;\n                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n                    z-index: 1001;\n                }\n                .modal-header, .modal-footer {\n                    padding: 16px;\n                    border-bottom: 1px solid #eee;\n                }\n                .modal-header {\n                    display: flex;\n                    justify-content: flex-end;\n                }\n                .close-button {\n                    background: none;\n                    border: none;\n                    font-size: 18px;\n                    cursor: pointer;\n                }\n                .modal-content {\n                    padding: 16px;\n                }\n                .modal-footer {\n                    display: flex;\n                    justify-content: flex-end;\n                    gap: 8px;\n                    border-top: 1px solid #eee;\n                }\n                .modal-footer button {\n                    padding: 8px 16px;\n                    cursor: pointer;\n                    border-radius: 4px;\n                    border: 1px solid #ccc;\n                }\n                .confirm-button {\n                    background-color: #007bff;\n                    color: white;\n                    border: none;\n                }\n                .close-modal-button {\n                    background-color: #ddd;\n                    color: black;\n                }\n\n                :host([open]) .backdrop {\n                    display: flex;\n                }\n            </style>\n\n            <div class="backdrop">\n                <div class="modal">\n                    <div class="modal-header">\n                        <button class="close-button">&times;</button>\n                    </div>\n                    <div class="modal-content">\n                        <slot name="content">Contenido del modal</slot>\n                    </div>\n                    <div class="modal-footer">\n                        ${n?"":'<button class="confirm-button">Confirmar</button>'}\n                        ${t?"":'<button class="close-modal-button">Cerrar</button>'}\n                    </div>\n                </div>\n            </div>\n        `}}customElements.define("my-modal",t),customElements.define("my-modal-extend",class extends t{constructor(){super()}render(){const n=this.getAttribute("modalSize")||"medium";console.log("Modal size:",n),super.render();const t=document.createElement("style");t.textContent=`\n            .modal {\n                max-width: ${{extra_small:"300px",small:"400px",medium:"500px",large:"600px",extra_large:"700px"}[n]};\n            }\n        `,this.shadowRoot.appendChild(t)}})})()})();