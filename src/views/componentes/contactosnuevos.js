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


export class appContactosnuevos extends connect(store)(LitElement) {
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

       .card{
            color: white;
            display: grid;
            grid-template-rows: 1fr 3fr;
            grid-template-columns: auto 3fr;
         
            cursor: pointer;
            padding: 1rem;
            gap: 0.5rem;
        }



        .icono{
          display:grid;
          grid-row-start: span 2;
          align-self:start;
 
        }

        .icono[media-size="small"]{
            align-self:center;
        }

        .icono svg{
            width:3rem;
            height:3rem;
            fill:white;
 
        }
      

        .card[media-size="small"]{
            display:grid;
            grid-template-columns:auto 1fr;
            background: linear-gradient(45deg, rgba(46,46,46,1) 0%, rgba(232,232,232,0) 100%);
            padding-left:1rem;
            width:80%;
        }
        
        .card svg[media-size="small"]{
            fill:white;
        }

        .wa{
            display:grid;
            color:white;
            font-weight:bold

        }

        .wa[media-size="small"]{
            padding-left:1rem;
            padding-top:1rem;
            font-size:1.3rem;

        }

        .wa1{
            font-weight:normal;
            font-size:1rem;
            color:white;
        }

        .wa1[media-size="small"]{
            font-size:1.3rem;
        }

        .wanro{
            font-weight:bold;
            font-size:1.3rem;
            color:var(--color-boton);
        }

        .ultimorenglon{
            display:grid;
            grid-template-columns:1fr 1fr
        }

        .ultimorenglon[media-size="small"]{
            display:grid;
            grid-template-columns:1fr 1fr
        }

        .celda{
            align-self:start;
            display:grid;
            grid-template-columns:auto 1fr;
            cursor:pointer;
        }

        .icono2{
            height:2.5rem;
            width:2.5rem;
            fill:white;
        }

        .question{
            color:white;
            display:grid;
            font-weight:bold;
            font-size:1rem;
            align-self:center
        }

        .separador{
            display:grid;
            }

        .separador[media-size="small"]{
            display:none;
            visibility:hidden;
        }
        `
    }



    render() {
        return html `

        <div class="card" @click="${this.whatsapp}" .value="${"WHATSAPPINFO"}" media-size="${this.mediaSize}">
            <div class="icono" media-size="${this.mediaSize}">${WHATSAPP}</div>
            <div class="wa" media-size="${this.mediaSize}">POR WHATSAPP
                <div class="wa1" media-size="${this.mediaSize}">
                    <div>Inicia un chat al</div>
                    <div class="wanro">+54 9 11-3442-7999</div>                    
                </div>
            </div>
        </div>

        <div class="card" @click="${this.selectMenu}" .value="${"FORMULARIOINFO"}" media-size="${this.mediaSize}">
            <div class="icono" media-size="${this.mediaSize}">
                ${FORMULARIO}
            </div>
            <div class="wa" media-size="${this.mediaSize}">
                COMPLETANDO EL FORMULARIO
            
                <div class="wa1" media-size="${this.mediaSize}">
                    Un asesor se comunicara para responder todas las dudas
                </div>
            </div>
        </div>

        <div class="card" @click="${this.redireccionCob}" .value="${"COBERTURAINFO"}" media-size="${this.mediaSize}">
            <div class="icono" media-size="${this.mediaSize}">
                ${MICOBERTURA}
            </div>
            <div class="wa" media-size="${this.mediaSize}">
                ¿CUÁL ES MI COBERTURA?
            </div>
        </div>
    
        <div class="separador" media-size="${this.mediaSize}"></div>

        <div class="ultimorenglon" media-size="${this.mediaSize}">
            <div class="celda"  @click="${this.faqs}" .value="${"PREGUNTASINFO"}" media-size="${this.mediaSize}">
                <div class="icono2">
                    ${PREGUNTASWHITE}
                </div>
                <div class="question" media-size="${this.mediaSize}">
                    PREGUNTAS<BR> FRECUENTES
                </div>
            </div>

             <div class="celda"  @click="${this.redireccionFac}" .value="${"FACTURASINFO"}" media-size="${this.mediaSize}">
                <div class="icono2">
                    ${FACTURAWHITE}
                </div>
                <div class="question" media-size="${this.mediaSize}">
                    DESCARGAR <BR>MI FACTURA
                </div>
            </div> 
        </div>   
        
    

            <!-- <div class="whatsapp tarjeta" @click="${this.whatsapp}" .value="${"WHATSAPPINFO"}" media-size="${this.mediaSize}">
                <div class="icono">${WHATSAPP}</div>
                <div class="descri">POR WHATSAPP</div>
                
                <div class="subdescri"  media-size="${this.mediaSize}">
                    <div class="whatsapp1">Inicia un chat al</div>
                    <div class="whatsapp2">+54 9 11-3442-7999</div>                    
                </div>
            </div> -->





            <!-- <div class="preguntas preguntascolumnas" @click="${this.selectMenu}" .value="${"PREGUNTASINFO"}" media-size="${this.mediaSize}">
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
            </div> -->



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

        var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (es_firefox) {
            window.open("https://web.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        } else {
            window.open("https://api.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        }


    }


    faqs(e) {
        window.open("https://www.ikeargentina.com.ar/institucional/Faqs.pdf", "FAQs")
        /*         this.selectMenu(e)
                this.open = false
                store.dispatch(toggleMenu()) */
    }

    redireccionCob() {
        window.open("https://www.atencionike.com.ar/")
    }

    redireccionFac() {

        window.open("https://mifactura.ikeasistencia.com")
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
window.customElements.define("app-contactosnuevos", appContactosnuevos);