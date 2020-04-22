import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    connect
} from "@brunomon/helpers"
import {
    store
} from "../../redux/store";

import {
    carteles
} from "../css/carteles"

import {
    IKEASISTENCIA
}
from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideProductos extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.current = "x"


    }

    static get styles() {
        return css `
        ${carteles}
   
        :host{
            display:grid;
            background-image: var(--fondo-institucional);
            background-size: 100vw 100vh;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
        
        }

        :host([media-size="small"]){
            background-image:var(--fondo-institucionalphone)
        }
        `
    }
    render() {
        return html `
        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>              
        `
    }

    stateChanged(state, name) {}

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            }
        }

    }
}
window.customElements.define("slide-productos", slideProductos);