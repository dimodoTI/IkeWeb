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
} from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideTecnologicoInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-tecnologicoinfo);
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
           
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-tecnologicoinfophone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;         
        } 
        `
    }
    render() {
        return html `
        <div class="cartel"  media-size="${this.mediaSize}">
            <div class="tituloInfo"  media-size="${this.mediaSize}">
                <div >PLAN TECNOLÓGICO</div>
            </div>
            <div class="leyenda" style="width:100%"  media-size="${this.mediaSize}">
                Conectándote con lo último en tecnología
            </div>
        <ul>
            <li  media-size="${this.mediaSize}"> Asesoramiento remoto las 24hs.</li>
            <li media-size="${this.mediaSize}"> Arreglo de pantalla de Celulares</li>
            <li  media-size="${this.mediaSize}"> Configuración remota de equipos</li>   
        </ul>
        <div class="conocerMas" @click="${this.conocerMas}" media-size="${this.mediaSize}">CONTRATÁ</div>
            
        </div>
        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>              
        `
    }

    conocerMas() {
        var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (es_firefox) {
            window.open("https://web.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        } else {
            window.open("https://api.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        }
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
window.customElements.define("slide-tecnologico-info", slideTecnologicoInfo);