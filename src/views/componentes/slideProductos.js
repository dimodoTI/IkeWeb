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

export class slideProductos extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-institucional);
            background-size: 100vw 100vh;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
        
        }

        :host([media-size="small"]){
            background-image:var(--fondo-institucionalphone)
        }

        .prod[media-size="small"]{
            width:80%;
            display:grid
        }
        
        .prod {
            width:50%
        }`
    }
    render() {


        return html `
            <div class="cartel" media-size="${this.mediaSize}" >
                <div class="titulo prod" media-size="${this.mediaSize}">
                    POR UNA PEQUEÑA CUOTA MENSUAL TE OFRECEMOS PLANES
                    QUE RESUELVEN LOS IMPREVISTOS DE TU DIA A DIA
                </div>
                <div class="leyenda" media-size="${this.mediaSize}">
                Nuestra idea es siempre estar ahí, para hacerte la vida más fácil. Estamos al lado tuyo cuando vos, tu familia, tu mascota, tu auto o tu hogar nos necesiten. Para que mientras nosotros nos ocupamos del problema, vos puedas seguir tranquilamente con tu vida

                </div>
                <!-- <div class="masinfo" @click="${this.masInfo}"  media-size="${this.mediaSize}">Mas Información</div> -->
            </div>

        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>              
        `
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
window.customElements.define("slide-productos", slideProductos);