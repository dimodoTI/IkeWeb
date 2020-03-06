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

} from "../../../css/imagenes.css"

import {
    carteles
} from "../css/carteles"

import {
    IKEASISTENCIA
} from "../../../assets/icons/icons"
import {
    selectMenu,
    selectSubmenu
} from "../../redux/actions/ui";

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideInstitucional extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image:var(--fondo-institucional);
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
                <div class="tituloInstitucional">
                    ESTAMOS EN TU VIDA<br>PARA APOYARTE
                </div>
                <div class="masinfo" @click="${this.masInfo}">Mas Información</div>
            </div>
            <div class="logoBottom">
                    ${IKEASISTENCIA}
                </div>            
        `
    }

    masInfo() {

        store.dispatch(selectMenu("PRODUCTOS"))
        store.dispatch(selectSubmenu("HOGAR"))
    }

    stateChanged(state, name) {

    }

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-institucional", slideInstitucional);