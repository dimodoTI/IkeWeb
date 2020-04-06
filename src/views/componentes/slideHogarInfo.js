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
            height:100%;
            width:100%;
           
        }

        :host([media-size="small"])
        {
            
            /* grid-auto-flow:column; */
            /* grid-template-columns:auto 9fr; */
            background-color:rgb(112,99,96);
             background-image:var(--fondo-hogarinfophone); 
            background-repeat:no-repeat;
            
  
            padding:0;            
        }    
        
        
        .fondo{
            visibility:hidden
        }

        .fondo[media-size="small"] {
            
            visibility:visible;
            background-repeat:no-repeat

        }
        .recuadro{
            align-self:center
        }
        .recuadro[media-size="small"]{
            background-color:rgb(112,99,96);
            background-image:linear-gradient(to bottom, #49403e, transparent);
            align-self:flex-start;
            padding:0
        }
        .cartel[media-size="small"]{
            justify-self: flex-start;
            align-self: center;
            background-color:rgba(0,0,0,.5)
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
                Te asistimos en tu hogar con personal<BR>
                calificado y de confianza.
        </div>
        <ul media-size="${this.mediaSize}">
            <li> Reparación de Aire Acondicionado</li>
            <li> Albañil</li>
            <li> Cerrajero</li>
            <li> Electricista</li>
            <li> Fumigación</li>
            <li> Gasista</li>
            <li> Mantenimiento de línea blanca y marrón</li>
            <li> Mantenimiento</li>
            <li> Mudanza</li>
            <li> Plomero</li>
            <li> Vidriero</li>
            <li> Vigilancia</li>
        </ul>

            
        
        <div class="conocerMas" @click="${this.conocerMas}" media-size="${this.mediaSize}">CONTRATÁ</div>
        </div>
        
        <div class="logoBottom">
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