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
    PREGUNTAS
} from "../../../assets/icons/icons"


export class appContactos extends connect(store)(LitElement) {
    constructor() {
        super();
    }

    static get styles() {
        return css `
        ${boton}
        :host{
            position:relative;
            display:grid;
            grid-template-areas:    "whatsapp formulario"
                                    "cobertura nada"
                                    ;
            grid-template-rows: 8rem 8rem;
            grid-template-columns: 20rem 20rem ;
            grid-gap:.6rem;
            
        }

       .whatsapp{
           grid-area:whatsapp
       }

       .telefono{
           grid-area:telefono
       }
       .mail{
           grid-area:mail
       }
       .formulario{
           grid-area:formulario
       }
       .cobertura{
           grid-area:cobertura
       }
       .factura{
           grid-area:factura
       }
       .preguntas{
           grid-area:preguntas
       }

       .tarjeta{
           color:white;
           display:grid;
           grid-template-rows:1fr 3fr;
           grid-template-columns:auto 3fr;
           padding:1rem;
           grid-gap:.5rem;
           cursor:pointer
        }

        .descri{
            font-size:1.1rem;
            font-weight:bold;
            padding-top:1rem
        }

        .subdescri{
                   display: grid;
    grid-auto-flow: row;
    align-content: start; 
    font-size:.8rem
        }

        .icono svg{
            width:3rem;
            height:3rem
        }




        `
    }

    render() {
        return html `
            <div class="whatsapp tarjeta" @click="${this.selectMenu}" .value="${"WHATSAPPINFO"}">
                <div class="icono">${WHATSAPP}</div>
                <div class="descri">POR WHATSAPP</div>
                <div></div>
                <div class="subdescri"><div style="font-size:.8rem">Inicia un chat al</div><div style="color:var(--color-boton);font-size:.9rem;font-weight:bold">+54 9 11-3442-7999</div></div>
            </div>
            <div class="formulario tarjeta" @click="${this.selectMenu}" .value="${"FORMULARIOINFO"}">
                <div class="icono">${FORMULARIO}</div>
                <div class="descri" style="padding-top:.5rem">COMPLETANDO EL FORMULARIO</div>
                <div></div>
                <div class="subdescri">Un asesor se comunicara para responder todas las dudas</div>
            </div>

            <div class="cobertura tarjeta" @click="${this.selectMenu}" .value="${"COBERTURAINFO"}">
                <div class="icono">${MICOBERTURA}</div>
                <div class="descri" style="padding-top:.5rem">CONOCER<BR>MI COBERTURA</div>
            </div>

        `
    }

    selectMenu(e) {
        const botones = this.shadowRoot.querySelectorAll(".boton")
        botones.forEach((button) => {
            button.classList.remove("seleccionado")
        });
        e.currentTarget.classList.add("seleccionado")
        store.dispatch(selectMenu(e.currentTarget.value))
    }

    stateChanged(state, name) {

    }

    static get properties() {
        return {

        }
    }
}
window.customElements.define("app-contactos", appContactos);