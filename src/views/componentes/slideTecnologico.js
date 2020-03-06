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

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideTecnologico extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-tecnologico);
            background-size: 100% 100%;
            background-position: center;
            height:100%;
            width:100%;
           
        }
        `
    }
    render() {
        return html `
        <div class="cartel">
            <div class="opcion">TECNOLÓGICO</div>
            <div class="titulo">
                <div >¿SE TE CUELGA LA COMPUTADORA?</div>
                <div >¿DESCARGASTE UN PROBLEMA?</div>
            </div>
            <div class="leyenda">
                Te brindamos asesoramiento telefónico las 24 hs<BR>
                para guiarte paso a paso en cada solución<BR>
                que requieran tus dispositivos tecnológicos y si no lo pueden<BR>
                solucionar, coordinamos la atención personalizada            
            </div>
            <div class="masinfo" @click="${this.masInfo}">Mas Información</div>
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
window.customElements.define("slide-tecnologico", slideTecnologico);