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

export class slideIkemax extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-ikemax);
            background-size: 100vw 100vh;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-ikemaxphone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }`

    }

    render() {
        return html `

        <div class = "cartel" media-size = "${this.mediaSize}" >
            <div class = "opcion" media-size = "${this.mediaSize}" >PLAN IKE MAX </div> 
                <div class = "titulo" media-size = "${this.mediaSize}" >
                    <div>UN PLAN INTEGRAL PARA ESTAR CUBIERTO EN TODO MOMENTO</div> 
                    <div>PARA QUE NADA DETENGA TUS PLANES</div> 
                </div> 
                <div class = "leyenda" media-size = "${this.mediaSize}">
                Con nuestro plan Iké Max Tu Hogar, tu auto, tus dispositivos tecnológicos cuentan con toda nuestra red de mas de 1300 profesionales para brindarte tranquilidad ante cualquier imprevisto que pueda surgir
                </div>
                <div style="display:grid;  grid-auto-flow:row;grid-gap:.7rem;">
                    <!-- <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">Mas Información</div> -->
                    <div class="masinfo" @click="${this.conocerMas}" media-size="${this.mediaSize}">CONTRATÁ</div>
                </div>
            </div>

            <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>           

                `
    }
    conocerMas() {
        window.open("http://ikeargentina.com.ar/modulares/")
    }

    masInfo(e) {
        window.estado = {
            option: window.estado.option,
            suboption: window.estado.suboption,
            masInfo: true
        }
        window.history.pushState(window.estado, null, "");
        dataLayer.push({
            event: 'pageview',
            page: {
                path: '/' + e.currentTarget.value,

            }
        });
        store.dispatch(masInfo())
    }

    stateChanged(state, name) {}

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },
        }

    }
}
window.customElements.define("slide-ikemax", slideIkemax);