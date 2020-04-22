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
            background-size: cover;
            height:100%;
            width:100%;
           
        }
        :host([media-size="small"]){         
            background-image:var(--fondo-bicicletasinfophone);
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
                <div >BICICLETAS</div>
            </div>
            <div class="leyenda" style="width:100%">
                Que nada detenga tus ganas de cuidar el medioambiente
                
            </div>
            <ul media-size="${this.mediaSize}">
                <li media-size="${this.mediaSize}"> Pinchadura</li>
                <li media-size="${this.mediaSize}"> Rotura de frenos y/o cadena</li>
                <li media-size="${this.mediaSize}"> Calibración de cambios</li>
                <li media-size="${this.mediaSize}"> Mantenimiento general de la bicicleta</li>
                <li media-size="${this.mediaSize}"> Traslados de Bicicleta ante imposibilidad de arreglarla</li>
            </ul>           
            <div class="conocerMas" @click="${this.conocerMas}" media-size="${this.mediaSize}">CONTRATÁ</div>
        </div>
    
    <div class="logoBottom" media-size="${this.mediaSize}">
                    ${IKEASISTENCIA}
                </div>      
        `
    }
    conocerMas() {
        window.open("https://ikeasistencia.contactese.com/bicicletas/")
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
window.customElements.define("slide-bicicletas-info", slideBicicletasInfo);