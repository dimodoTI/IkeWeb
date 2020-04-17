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
    contactos
} from "../css/contactos"

import {
    masInfo,
    toggleMenu
} from "../../redux/actions/ui"
import {
    PHONE24,
    IKEASISTENCIA
}
from "../../../assets/icons/icons"
/* import {
    appContactos
} from "../componentes/contactos" */

import {
    appContactosnuevos
} from "../componentes/contactosnuevos"


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
const TOGGLE = "ui.menuOpen"
export class slideAtencion extends connect(store, OPCION_SELECCIONADA, TOGGLE)(LitElement) {
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
            background-image: var(--fondo-atencion);
            background-size: 100vw 100vh;
            background-position: center;
            background-size:cover;
            height:100%;
            width:100%;
        }

        :host([media-size="small"]){
            background-image: var(--fondo-atencionphone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;      
            
        }

        .servicio{
            width:75rem;
            height:4rem
        }
        .contenedor{
            padding:2rem;
            display:grid;
            grid-auto-flow:row;
            grid-gap:1rem;
            grid-template-columns:34.2rem;
            
        }

        .contenedor[media-size="small"]{
            background: linear-gradient(180deg, rgba(46,46,46,1) 0%, rgba(232,232,232,0) 100%);
            padding-left:.1rem;
            grid-gap: 0;
            grid-auto-rows: 1fr auto 4fr;

        }

        .titulo[media-size="small"]{
            justify-self: start;
             padding-bottom: 3rem;
             padding-left:1rem;
        }

        .solicitarservicio{
            display:grid;
            background-color:var(--color-boton);
            align-items:center;
            height:4rem;
            grid-auto-flow:column;
        }

        .solicitarservicio svg{
            height:3rem;
            width:3rem;
        }
        /* .preguntasfrecuentes{
            justify-self:left;
            padding:1rem;
            display:grid;
            grid-auto-flow:columns;
            grid-template-columns:auto 1fr ;
            grid-gap:2.5rem  ;         
            font-size:.7rem;
            
        }

        .preguntascolumnas{
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            cursor:pointer
        } */
        `

    }

    render() {
        return html `
        <div class="contenedor" media-size="${this.mediaSize}">
            <div class="solicitarservicio" >
                <div style="justify-self:center">
                    ${PHONE24} 
                </div>
                <div style="display:grid; grid-auto-flow:column;grid-template-columns:auto 1fr;grid-gap:.5rem">
                    SOLICITAR UN SERVICIO AL
                    <div style="color:white; font-weight:bolder">
                        0800-122-1453
                    </div>                    
                </div>

            </div>
            <div class="titulo" media-size="${this.mediaSize}">POR ATENCIÓN AL CLIENTE CONTACTANOS:</div>
            <app-contactosnuevos id="contactos" media-size="${this.mediaSize}"></app-contactosnuevos>
        </div>
        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
        </div>

        `
    }

    stateChanged(state, name) {

    }




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
window.customElements.define("slide-atencion", slideAtencion);