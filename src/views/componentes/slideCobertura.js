import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    connect

} from "@brunomon/helpers"

import {
    nanoInput
} from "@brunomon/nano-input"
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
    PHONE,
    IKEASISTENCIA
}
from "../../../assets/icons/icons"


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideCobertura extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-color: #e7e6e6;
            background-size: 100vw 100vh;
            background-position: center;
            height:100%;
            width:100%;
        }

        .contenedor{
            padding:5rem;
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            grid-template-columns: 1fr 1fr;
            padding-top:7rem
        }
      
       .tarjetabig{
           color:black;
           display:grid;
           grid-auto-flow:row;
           grid-gap:.1rem;
           grid-template-rows: auto 1fr auto 1fr 1fr
        }
        
        .logo{
            color:black;
            padding-bottom:1rem;
        }

        .logo svg{
           height:6rem;
           width:6rem;
           fill:#111820
       }

       .descri{
           font-size:1.5rem;
           font-weight:bolder;
           display:grid;
           grid-auto-flow:row;
           grid-template-rows: auto;
           color: var(--color-boton);
       }

       .separador{
           width:3rem;
           border-bottom: 1px solid black
       }

       .modo{
            font-size:1.2rem;
            font-weight:bold;
            display:grid;
            align-items:center;
            grid-auto-flow:column;
            grid-template-columns:auto 1fr;
            grid-gap:1rem
       }

       .modo svg{
           height:3rem;
           width:3rem;
       }

       .subdescri{
        font-size:1rem;
        padding-top:1rem
       }

       .formulario{
           background-color:white;
           grid-auto-flow:row

       }

       .formulariotitulo{
           color:var(--color-boton)

       }

       .botonbuscar{
           width:80%;
           background-color:var(--color-boton);
           color:black;
           font-weight:bold;
           height:3rem;
           height:2rem;
           align-items:center;
           align-items:center;
           justify-self:center;
           align-content:center
       }
        `
    }

    render() {
        return html `
        <div class="contenedor">
            <div class="tarjetabig">
                <div class="logo">${IKEASISTENCIA}</div>
                <div class="descri">MI COBERTURA</div>
                <div class="separador"></div>
                <div class="subdescri">Consutá tu cobertura ingresando el DNI<br>Por cualquier duda contractanos</div>
                <div class="modo" >
                <div style="justify-self:center">
                    ${PHONE}
                </div>
                <div style="display:grid; grid-auto-flow:column;grid-template-columns:auto 1fr;grid-gap:.5rem">
                    0800-122-1453
                </div>
            </div>
            </div>

            <div class="formulario">
                <div class="formulariotitulo">INICIAR SESION</div>
                 
                <nano-input class="dni" id="dni" maxlength="8" type="number" max="99999999" min="0" label="DNI"></nano-input>
                <div class="botonbuscar">BUSCAR</div>
                
                <div class="g-recaptcha" data-sitekey="6LeELdoUAAAAAAq9Uup5x3YOhAUb0DzjAy07pfQt"></div>
                
            </div>
        </div>
        <script src = 'https://www.google.com/recaptcha/api.js?hl=es' > < /script></script>

 
        `
    }

    stateChanged(state, name) {

    }


    //6LeELdoUAAAAAAq9Uup5x3YOhAUb0DzjAy07pfQt clave cliente
    //6LeELdoUAAAAAEtuxAXIfAft57Kasay9C4lnhSeK clave para sitio web y sitio recaptcha



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
window.customElements.define("slide-cobertura", slideCobertura);