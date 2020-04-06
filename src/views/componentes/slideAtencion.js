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
    masInfo
} from "../../redux/actions/ui"
import {
    PHONE24,
    IKEASISTENCIA
}
from "../../../assets/icons/icons"

import {
    appContactos
} from "../componentes/contactos"


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideAtencion extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
        <div class="contenedor">
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
            <div class="titulo">POR ATENCIÓN AL CLIENTE CONTACTANOS:</div>
            <app-contactos id="contactos"></app-contactos>
        </div>
        <div class="logoBottom">${IKEASISTENCIA}</div>

        `
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-atencion", slideAtencion);