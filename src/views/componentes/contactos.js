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

        :host([media-size="small"]){

           
            grid-template-columns: 1fr;
            grid-template-areas: "whatsapp"
                                 "formulario"
                                 "cobertura"
                                 "preguntas"
                                 "factura"
                                 
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
            color: white;
            display: grid;
            grid-template-rows: 1fr 3fr;
            grid-template-columns: auto 3fr;
         
            cursor: pointer;
            padding: 1rem;
            gap: 0.5rem;
        }

        .tarjeta[media-size="small"]{
            grid-template-columns: auto 1fr;
            padding: 0;
            width: 100vw;
        }


        .descri{
            font-size:1.4rem;
            font-weight:bold;
            padding-top:1rem;
            display:grid;
        }

        .subdescri{
            display: grid;
            grid-auto-flow: row;
            align-content: start; 
            font-size:.8rem
        }

        .subdescri[media-size="small"]{
            
            font-size:1.3rem;
            font-size:15px
        }

        .whatsapp1{
            font-size:1.3rem
        } 

        .whatsapp2 {
            color:var(--color-boton);
            font-size:1.3rem;
            font-weight:bold;
        }

        .icono{
          display:grid;
          grid-row-start: span 2;
          align-self:start;
 
        }

        .icono svg{
            width:3rem;
            height:3rem;
            fill:white
        }
        .preguntasfrecuentes{
            justify-self:left;
            padding:1rem;
            display:grid;
            grid-auto-flow:columns;
            grid-template-columns:auto 1fr ;
            grid-gap:1rem  ;         
            font-size:1rem;
            
        }

        .preguntascolumnas{
            display:grid;
            grid-auto-flow:column;
            cursor:pointer
        }
        .preguntascolumnas[media-size="small"]{
            grid-auto-flow:row
        }

    

        `
    }

    render() {
        return html `
            <div class="whatsapp tarjeta" @click="${this.whatsapp}" .value="${"WHATSAPPINFO"}" media-size="${this.mediaSize}">
                <div class="icono">${WHATSAPP}</div>
                <div class="descri">POR WHATSAPP</div>
                
                <div class="subdescri"  media-size="${this.mediaSize}">
                    <div class="whatsapp1">Inicia un chat al</div>
                    <div class="whatsapp2">+54 9 11-3442-7999</div>                    
                </div>
            </div>


            <div class="formulario tarjeta" @click="${this.selectMenu}" .value="${"FORMULARIOINFO"}" media-size="${this.mediaSize}">
                <div class="icono">${FORMULARIO}</div>
                <div class="descri" style="padding-top:.5rem">COMPLETANDO EL FORMULARIO</div>
                <div class="subdescri"  media-size="${this.mediaSize}">Un asesor se comunicara para responder todas las dudas</div>
            </div>

            <div class="cobertura tarjeta" @click="${this.redireccionCob}" .value="${"COBERTURAINFO"}" media-size="${this.mediaSize}">
                <div class="icono">${MICOBERTURA}</div>
                <div class="descri" style="padding-top:.5rem">¿CUÁL ES<BR>MI COBERTURA?</div>
            </div>

            <div class="preguntas preguntascolumnas" @click="${this.selectMenu}" .value="${"PREGUNTASINFO"}" media-size="${this.mediaSize}">
                <div class="preguntasfrecuentes">
                    <div>${PREGUNTASWHITE}</div>
                    <div style="color:white">PREGUNTAS<BR>FRECUENTES</div>
                </div>
            </div>
            
            <div class="factura preguntascolumnas"  @click="${this.redireccionFac}" .value="${"FACTURASINFO"}" media-size="${this.mediaSize}">
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
        window.open("https://api.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        //window.open("https://api.whatsapp.com/send?phone=5491149707394&text=&source=&data=")
    }


    redireccionCob() {
        window.open("https://www.atencionike.com.ar/")
    }

    redireccionFac() {
        window.open("http://mifactura.ikeasistencia.com")
    }

    stateChanged(state, name) {

    }

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
window.customElements.define("app-contactos", appContactos);