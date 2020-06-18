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

export class slideVialInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-vialinfo);
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
           
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-vialinfophone);
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
                <div >PLAN VIAL</div>
            </div>
            <div class="leyenda"  media-size="${this.mediaSize}">
                Con vos para solucionar
                cualquier percance en el camino.
            </div>
        <ul media-size="${this.mediaSize}">
            <li media-size="${this.mediaSize}"> Cambio de neumático</li>
            <li media-size="${this.mediaSize}"> Cerrajería Automovilística</li>
            <li media-size="${this.mediaSize}"> Colocación de alarma</li>
            <li media-size="${this.mediaSize}"> Custodia de vehículo</li>
            <li media-size="${this.mediaSize}"> Extracción</li>
            <li media-size="${this.mediaSize}"> Grabado de cristales</li>
            <li media-size="${this.mediaSize}"> Mecánica ligera</li>
            <li media-size="${this.mediaSize}"> Paso de corriente</li>
            <li media-size="${this.mediaSize}"> Referencias Mecánicas</li>
            <li media-size="${this.mediaSize}"> Remis</li>
            <li media-size="${this.mediaSize}"> Remolque</li>
            <li media-size="${this.mediaSize}"> Suministro de combustible</li>
            <li media-size="${this.mediaSize}"> Traslado de acompañantes</li>  
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
window.customElements.define("slide-vial-info", slideVialInfo);