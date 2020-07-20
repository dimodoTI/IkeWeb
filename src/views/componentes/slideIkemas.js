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

export class slideIkemas extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
           
        }
        :host([media-size="small"]){         
            
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        } 

        .contenedor{
            border:none;
            height:100%;
            width:100%;
        }
        `
    }
    render() {
        return html `
        
        <iframe id="iframeikemas" src= "https://ikeclub.arventcloud.com/index" class="contenedor"></iframe>
           
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
window.customElements.define("slide-ikemas", slideIkemas);