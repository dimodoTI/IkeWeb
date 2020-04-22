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
            background-size: cover;
            height:100%;
            width:100%;
           
        }
        :host([media-size="small"]){         
            background-image:var(--fondo-hogarinfophone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }

        `
    }
    render() {
        return html `
        
        <div class="cartel" media-size="${this.mediaSize}">
            <div class="tituloInfo" media-size="${this.mediaSize}">
                <div >HOGAR</div>
            </div>
            <div class="leyenda" media-size="${this.mediaSize}">
                Te asistimos en tu hogar con personal
                calificado y de confianza.
        </div>
        <ul media-size="${this.mediaSize}">
            <li media-size = "${this.mediaSize}" > Reparación de Aire Acondicionado</li>
            <li media-size = "${this.mediaSize}" > Albañil</li>
            <li media-size = "${this.mediaSize}" > Cerrajero</li>
            <li media-size = "${this.mediaSize}" > Electricista</li>
            <li media-size = "${this.mediaSize}" > Fumigación</li>
            <li media-size = "${this.mediaSize}" > Gasista</li>
            <li media-size = "${this.mediaSize}" > Mantenimiento de línea blanca y marrón</li>
            <li media-size = "${this.mediaSize}" > Mantenimiento</li>
            <li media-size = "${this.mediaSize}" > Mudanza</li>
            <li media-size = "${this.mediaSize}" > Plomero</li>
            <li media-size = "${this.mediaSize}" > Vidriero</li>
            <li media-size = "${this.mediaSize}" > Vigilancia</li>
        </ul>

            
        
        <div class="conocerMas" @click="${this.conocerMas}" media-size="${this.mediaSize}">CONTRATÁ</div>
        </div>
        
        <div class="logoBottom" media-size="${this.mediaSize}">
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

            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },
        }

    }
}
window.customElements.define("slide-hogar-info", slideHogarInfo);