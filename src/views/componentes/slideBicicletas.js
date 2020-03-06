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
    masInfo
} from "../../redux/actions/ui"


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideBicicletas extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-bicicletas);
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
            <div class="opcion">BICICLETAS</div>
            <div class="titulo">
                <div >QUE NADA DETENGA TUS GRANAS</div>
                <div >DE CUIDAR EL MEDIOAMBIENTE</div>
            </div>
            <div class="leyenda">
                Andá tranquilo, estamos para ayudarte si la bici te deja a pata
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
window.customElements.define("slide-bicicletas", slideBicicletas);