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

export class slideBicicletasInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-bicicletasinfo);
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
            <div class="tituloInfo">
                <div >BICICLETAS</div>
            </div>
            <div class="leyenda">
            Aca hay q pensar un texto<BR>
            para bicicletas.
        </div>
        <ul>
            <li> Pinchadura</li>
            <li> Rotura de frenos y/o cadena</li>
            <li> Calibración de cambios</li>
            <li> Mantenimiento general de la bicicleta</li>
            <li> Traslados de Bicicleta ante imposibilidad de arreglarla</li>
        </ul>           
    </div>
    <div class="logoBottom">
                    ${IKEASISTENCIA}
                </div>      
        `
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-bicicletas-info", slideBicicletasInfo);