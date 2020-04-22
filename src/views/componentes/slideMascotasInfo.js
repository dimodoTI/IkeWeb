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

export class slideMascotasInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-mascotasinfo);
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
           
        }

        :host([media-size="small"]){         
            background-image:var(--fondo-mascotasinfophone);
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
                <div >MASCOTAS</div>
            </div>
            <div class="leyenda" style="width:90%" media-size="${this.mediaSize}">
                Atendiendo a los más consentidos
                del hogar en todo lo necesario.
            </div>
             <ul media-size="${this.mediaSize}">
                <li media-size="${this.mediaSize}"> Veterinario On line 24 hs</lI>
                <li media-size="${this.mediaSize}"> Consulta en centro veterinario</lI>
                <li media-size="${this.mediaSize}"> Cirugía</lI>
                <li media-size="${this.mediaSize}"> Internación</lI>
                <li media-size="${this.mediaSize}"> Análisis clínicos</lI>
                <li media-size="${this.mediaSize}"> Guardería</lI>
                <li media-size="${this.mediaSize}"> Castración    </lI>        
            </ul>    
            <div class="conocerMas" @click="${this.conocerMas}"  media-size="${this.mediaSize}">CONTRATÁ</div>
        </div>
        
        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>              
        `
    }
    conocerMas() {
        window.open("https://www.ikeasistencia.contactese.com/mascotas/")
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
window.customElements.define("slide-mascotas-info", slideMascotasInfo);