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
    boton
} from "../css/boton"

import {
    selectMenu
} from "../../redux/actions/ui"




import {
    WHATSAPP,
    PHONE,
    MAIL,
    FORMULARIO,
    MICOBERTURA,
    FACTURA,
    PREGUNTAS,
    PREGUNTASWHITE,
    FACTURAWHITE,
    IKEASISTENCIA
} from "../../../assets/icons/icons"


export class slideFormularioInfo extends connect(store)(LitElement) {
    constructor() {
        super();
    }

    static get styles() {
        return css `
        ${boton}
        :host{
            display:grid;
            background-image: var(--fondo-formulario);
            background-size: 100% 100%;
            background-position: center;
            height:100%;
            width:100%;           
        }

        .formulario{
            display:grid;
             grid-auto-flow:row;
             grid-template-rows: 1fr .3fr auto auto auto auto 2fr;
             padding-left:3rem;
             grid-gap:.5rem

        }

        .cabecera{
            display:grid;
            font-size:2rem;
            font-weight:bold;
            color:white;
            padding-top:3rem
        }

        .subcabecera{
            display:grid;
            font-size:.8rem;
            color:white
        }

        .texto {
            display:grid;
            width:30rem;
            background-color:white;
            height:3rem
        }        

        .botonenviar{
            display:grid;
            width:30rem;
            background-color:var(--color-boton);
            align-items:center;
            justify-items:center;
            height:3rem;
            cursor:pointer

        }
        `
    }

    render() {
        return html `
            <div class="formulario">
                <div class="cabecera">ENVIANOS<BR>TU CONSULTA</div>
                <div class="subcabecera">Por favor, completá tus datos con tus comentarios<br>y te responderemos a la brevedad</div>
                <nano-input class="texto" type="text" label="Nombre"></nano-input>
                <nano-input class="texto" type="text" label="Email"></nano-input>
                <nano-input class="texto" type="text" label="Telefono"></nano-input>
                <div><textarea  style="width:29.7rem;font-family:Avenir;" rows="5"  id="comentario" type="text" placeholder="Comentarios"></textarea></div>
                <div class="botonenviar">ENVIAR</div>
            </div>
            <div class="logoBottom">${IKEASISTENCIA}</div>        
        `
    }



    redireccionCob() {
        window.open("http://www.atencionike.com.ar/")
    }

    redireccionFac() {
        window.open("http://mifactura.ikeasistencia.com")
    }

    stateChanged(state, name) {

    }

    static get properties() {
        return {

        }
    }
}
window.customElements.define("slide-formulario-info", slideFormularioInfo);