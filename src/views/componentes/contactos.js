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
    FACTURAWHITE
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
                                    "preguntas factura"
                                    ;
            grid-template-rows: 8rem 8rem 5rem;
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
        .preguntasfrecuentes{
            justify-self:left;
            padding:1rem;
            display:grid;
            grid-auto-flow:columns;
            grid-template-columns:auto 1fr ;
            grid-gap:1rem  ;         
            font-size:.7rem;
            
        }

        .preguntascolumnas{
            display:grid;
            grid-auto-flow:column;
            cursor:pointer
        }
        `
    }

    render() {
        return html `
            <div class="whatsapp tarjeta" @click="${this.whatsapp}" .value="${"WHATSAPPINFO"}">
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

            <div class="cobertura tarjeta" @click="${this.redireccionCob}" .value="${"COBERTURAINFO"}">
                <div class="icono">${MICOBERTURA}</div>
                <div class="descri" style="padding-top:.5rem">¿CUÁL ES<BR>MI COBERTURA?</div>
            </div>

            <div class="preguntas preguntascolumnas" @click="${this.selectMenu}" .value="${"PREGUNTASINFO"}">
                <div class="preguntasfrecuentes">
                    <div>${PREGUNTASWHITE}</div>
                    <div style="color:white">PREGUNTAS<BR>FRECUENTES</div>
                </div>
            </div>
            <div class="factura preguntascolumnas"  @click="${this.redireccionFac}" .value="${"FACTURASINFO"}">
                <div class="preguntasfrecuentes ">
                    <div>
                        ${FACTURAWHITE}
                    </div>
                    <div style="color:white">
                        DESCARGAR<br>MI FACTURA
                    </div>
                </div>
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

    whatsapp() {
        //window.open("https://api.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        window.open("https://api.whatsapp.com/send?phone=5491149707394&text=&source=&data=")
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
window.customElements.define("app-contactos", appContactos);