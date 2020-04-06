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

import {
    IKEASISTENCIA
} from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideVial extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-vial);
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
            <div class="opcion">VIAL</div>
            <div class="titulo">
                <div >¿PROBLEMAS CON TU AUTO?</div>
                <div >¿A KM DE LA SOLUCIÓN?</div>
            </div>
            <div class="leyenda">
            Estamos a tu lado para ayudarte en el camino,<BR>
            todos los días, las 24 hs en servicio de grúa,<BR>
            cambio de neumáticos y batería, suministro de<BR>
            combustible e información sobre talleres y repuestos<BR>
            Estamos con vos en 90 minutos
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
window.customElements.define("slide-vial", slideVial);