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

export class slideHogarInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-hogarinfo);
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
                <div >HOGAR</div>
            </div>
            <div class="leyenda">
                Te asistimos en tu hogar con personal<BR>
                calificado y de confianza.
        </div>
        <ul>
            <li> Reparación de Aire Acondicionado</li>
            <li> Albañil</li>
            <li> Cerrajero</li>
            <li> Electricista</li>
            <li> Fumigación</li>
            <li> Gasista</li>
            <li> Mantenimiento de línea blanca y marrón</li>
            <li> Mantenimiento</li>
            <li> Mudanza</li>
            <li> Plomero</li>
            <li> Vidriero</li>
            <li> Vigilancia</li>
        </ul>

            
        </div>
        <div class="conocerMas" @click="${this.conocerMas}">CONOCÉ MAS DEL SERVICIO</div>
        <div class="logoBottom">
            ${IKEASISTENCIA}
        </div>              
        `
    }

    conocerMas() {
        window.open("http://ikeargentina.com.ar/modulares/")
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-hogar-info", slideHogarInfo);