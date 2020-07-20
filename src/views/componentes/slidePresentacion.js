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

export class slidePresentacion extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
           
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-institucionalphone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }     
        `
    }
    render() {
        return html `
        <iframe id="framePresentacion" style="height:100%;width:100%" src="https://www.ikeargentina.com.ar/institucional/Presentacion.pdf"></iframe>

            
  

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
window.customElements.define("slide-presentacion", slidePresentacion);