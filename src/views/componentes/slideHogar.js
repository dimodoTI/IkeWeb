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
} from "../css/carteles.js"

import {
    masInfo
} from "../../redux/actions/ui"

import {
    IKEASISTENCIA
}
from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideHogar extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-hogar);
            background-size: 100vw 100vh;
            background-position: center;
            height:100%;
            width:100%;
        }

  
        `
    }

    render() {
        return html `
        <div class="cartel">
            <div class="opcion">HOGAR</div>
            <div class="titulo">
                <div >¿PROBLEMAS IMPREVISTOS?</div>
                <div >¿TU CASA TE DESBORDA?</div>
            </div>
            <div class="leyenda">
                Si olvidas o perdés tu llave te enviamos un cerrajero,<br>
                ante problemas eléctricos un especialista y <br>
                si el goteo no te deja dormir de noche <br>
                contás con nuestros plomeros de confianza
            </div>
            <div class="masinfo" @click="${this.masInfo}">Mas Información</div>
        </div>
        <div class="logoBottom">
            ${IKEASISTENCIA}
        </div>      
        `
    }

    masInfo(e) {
        store.dispatch(masInfo())
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-hogar", slideHogar);