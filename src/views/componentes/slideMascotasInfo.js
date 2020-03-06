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

export class slideMascotasInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-mascotasinfo);
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
                <div >MASCOTAS</div>
            </div>
            <div class="leyenda">
                Atendiendo a los más consentidos<BR>
                del hogar en todo lo necesario.
        </div>
        <ul>
            <li> Veterinario On line 24 hs</lI>
            <li> Consulta en centro veterinario</lI>
            <li> Cirugía</lI>
            <li> Internación</lI>
            <li> Análisis clínicos</lI>
            <li> Guardería</lI>
            <li> Castración    </lI>        
        </ul>    
        </div>
        <div class="conocerMas" @click="${this.conocerMas}">CONOCÉ MAS DEL SERVICIO</div>
        <div class="logoBottom">
            ${IKEASISTENCIA}
        </div>              
        `
    }
    conocerMas() {
        window.open("https://www.ikeasistencia.contactese.com/mascotas/")
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-mascotas-info", slideMascotasInfo);