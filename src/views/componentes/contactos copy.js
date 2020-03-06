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
            grid-template-areas:    "whatsapp telefono mail"
                                    "formulario cobertura factura"
                                    "preguntas preguntas preguntas"  ;
            grid-template-rows: 11rem 11rem 3rem;
            grid-template-columns: 11rem 11rem 11rem;
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
           background-color:white;
           color:black;
           display:grid;
           grid-auto-flow:row;
           padding:1rem;
           grid-gap:.5rem;
           cursor:pointer
        }

       .icono svg{
           height:3rem;
           width:3rem
       }

       .descri{
           font-size:.8rem;
           font-weight:bolder
       }

       .separador{
           width:3rem;
           border-bottom: 1px solid var(--color-boton)
       }

       .modo{
        font-size:.8rem;
       }

       .subdescri{
        font-size:.6rem;

       }

        .cartel{
            background-color:white;
            padding:.3rem;
            display: flex;
            justify-content: center  ;          
            align-items:center;
            font-weight:bolder;
            font-size:.8rem
        }

       .cartel svg {
           width:2rem;
           height:2rem;
           padding:.3rem
       }


        `
    }

    render() {
        return html `
            <div class="whatsapp tarjeta" >
                <div class="icono">${WHATSAPP}</div>
                <div class="descri">POR WHATSAPP</div>
                <div class="separador"></div>
                <div class="subdescri">Mandanos un mensaje al:</div>
                <div class="modo">+54 9 11-3442-7999</div>
            </div>
            <div class="telefono tarjeta" >
                <div class="icono">${PHONE}</div>
                <div class="descri">POR TELEFONO</div>
                <div class="separador"></div>
                <div class="subdescri">Llamanos al:</div>
                <div class="modo">0800-123-0752</div>
            </div>
            <div class="mail tarjeta">
                <div class="icono">${MAIL}</div>
                    <div class="descri">POR MAIL</div>
                    <div class="separador"></div>
                    <div class="subdescri">Mandanos un mail a:</div>
                    <div class="subdescri">servicios@ikeasistencia.com</div>
                </div>            
            </div>
            <div class="formulario tarjeta"  @click="${this.selectMenu}" .value="${"FORMULARIOINFO"}">
                <div class="icono">${FORMULARIO}</div>
                    <div class="descri">COMPLETANDO<BR>EL FORMULARIO</div>
                    <div class="separador"></div>
                    <div class="subdescri">Un asesor se comunicará para<br> responder todas tus dudas</div>
                    <!-- <div class="modo">servicios@ikeasistencia.com</div> -->
                </div>            
            </div>
            <div class="cobertura tarjeta" @click="${this.selectMenu}" .value="${"COBERTURAINFO"}">
                <div class="icono">${MICOBERTURA}</div>
                    <div class="descri">MI COBERTURA</div>
                    <div class="separador"></div>
                    <div class="subdescri">Conoce el alcance de tu cobertura</div>
                    <!-- <div class="modo">servicios@ikeasistencia.com</div> -->
                </div>                
            </div>
            
            <div class="factura tarjeta" @click="${this.selectMenu}" .value="${"FACTURAINFO"}">
                <div class="icono">${FACTURA}</div>
                <div class="descri">MI FACTURA</div>
                <div class="separador"></div>
                <div class="subdescri">Podes descargarte todas tus facturas</div>
                    <!-- <div class="modo">servicios@ikeasistencia.com</div> -->
            </div>
            <div class="preguntas cartel" @click="${this.selectMenu}" .value="${"PREGUNTASINFO"}">
                
                <div >${PREGUNTAS}</div>
                <div >PREGUNTAS FRECUENTES</div>
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