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
}
from "../../../assets/icons/icons"


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
            background-size: 100vw 100vh;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-bicicletasphone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }
        .titulo div {width:60%}
        
        .titulo div[media-size="small"]
        {width:90%}
        `
    }

    render() {
        return html `
        <div class="cartel" media-size = "${this.mediaSize}">
        <div class = "opcion" media-size = "${this.mediaSize}">BICICLETAS</div>
            <div class = "titulo" media-size = "${this.mediaSize}" >
                <div media-size="${this.mediaSize}">
                    ¿NECESITAS AYUDA CON TU BICICLETA?
                </div>
            </div>
            <div class="leyenda" media-size="${this.mediaSize}" style="width:80%">
                Andá tranquilo que nosotros te brindamos asistencia las 24 horas, los 365 días del año
        </div>
            <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">Mas Información</div>
        </div>

        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>      

        `
    }
    masInfo(e) {
        window.estado = {
            option: window.estado.option,
            suboption: window.estado.suboption,
            masInfo: true
        }
        dataLayer.push({
            event: 'pageview',
            page: {
                path: '/' + e.currentTarget.value,

            }
        });
        window.history.pushState(window.estado, null, "");
        store.dispatch(masInfo())
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
window.customElements.define("slide-bicicletas", slideBicicletas);