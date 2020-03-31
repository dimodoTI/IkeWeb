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
const MEDIA_SIZE = "ui.media.timeStamp"
export class slideInstitucional extends connect(store, OPCION_SELECCIONADA, MEDIA_SIZE)(LitElement) {
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
            background-size: cover;
            height:100%;
            width:100%;
        }

        :host([media-size="small"]){
            background-image:var(--fondo-institucionalphone);
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
        if (name == MEDIA_SIZE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }


    }

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
window.customElements.define("slide-institucional", slideInstitucional);