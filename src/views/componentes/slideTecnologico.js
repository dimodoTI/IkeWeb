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
} from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideTecnologico extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-tecnologico);
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
           
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-tecnologicophone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }     
        `
    }
    render() {
        return html `

            <div class="cartel" media-size="${this.mediaSize}">
                <div class="opcion"  media-size="${this.mediaSize}">TECNOLÓGICO</div>
                <div class="titulo"  media-size="${this.mediaSize}">
                    <div >¿SE TE CUELGA LA COMPUTADORA?</div>
                    <div >¿DESCARGASTE UN PROBLEMA?</div>
                </div>
                <div class="leyenda"  media-size="${this.mediaSize}">
                    Te brindamos asesoramiento telefónico las 24 hs
                    para guiarte paso a paso en cada solución que 
                    requieran tus dispositivos tecnológicos y si no  
                     pueden solucionar, coordinamos la atención
                    personalizada            
                </div>
                <div class="masinfo" @click="${this.masInfo}"  media-size="${this.mediaSize}">Mas Información</div>
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
window.customElements.define("slide-tecnologico", slideTecnologico);