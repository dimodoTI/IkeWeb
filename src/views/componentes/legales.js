import {
    LitElement,
    html,
    css
} from "lit-element";



import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";

import {
    boton
} from "../css/boton"

import {
    selectMenu
} from "../../redux/actions/ui"

const MEDIA_SIZE = "ui.media.timeStamp"
export class linkLegales extends connect(store, MEDIA_SIZE)(LitElement) {
    constructor() {
        super();

    }

    static get styles() {
        return css `
        ${boton}

        :host{
            display:grid;
            grid-auto-flow: column;
            background-color: black;
            width:100vw;
            justify-content:flex-start;
            position:absolute;
            grid-gap:.2rem;
            opacity:.7;
            align-items: center;
            bottom:2.3rem;
            padding:.7rem;
            
        }

        :host([media-size="small"]){
            bottom:2.2rem;
            padding:.3rem;
        }


        .link{
            color: white;
            font-size:.7rem;
            cursor: pointer;
        }

        .defensa{
            color: white;
            font-size:.7rem;

         
        }

        .defensa1 {
            color: white;
            font-size:.6rem;
        }

        .defensa1 span {
            font-size: .6rem !important;
            cursor: pointer;
        }

        .link:hover
      {
            color: var(--color-destacado);
        }
        .defensa1 span:hover{
            color: var(--color-destacado);
        }
        
        .opciones{
            color: white;
            display: grid;
            grid-auto-flow: dense;
            
            
        }

        `
    }


    render(){
        return html `
 
  
        <div style="width:100%;display:grid;grid-auto-flow:column;grid-gap:1rem;margin-left: 3rem" media-size="${this.mediaSize}">  
            <div class="link" media-size="${this.mediaSize}" @click="${this.defensa}">Defensa al Consumidor</div>
            <div class="link" media-size="${this.mediaSize}" @click="${this.politica}">Política de Privacidad </div>
            <div media-size="${this.mediaSize}">
                <div class="defensa">
                    Defensa de las y los Consumidores
                </div>
                <div class="defensa1">Para reclamos presione <span  @click="${this.defensa2}">Aquí</span></div>
            </div>
        </div> 
        `
    }


    stateChanged(state, name) {
        if (name == MEDIA_SIZE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }
    }

    defensa2(){
        window.open("https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario")
    }
    
    defensa() {
        window.open("https://www.consumidor.gov.ar/informacion-legal/")
    }

    politica(e){
        window.open("https://www.ikeargentina.com.ar/institucional/Privacidad.pdf")
    }


    selectMenu(e) {
        const botones = this.shadowRoot.querySelectorAll(".boton")
        botones.forEach((button) => {
            button.classList.remove("seleccionado")
        });
        e.currentTarget.classList.add("seleccionado")
        store.dispatch(selectMenu(e.currentTarget.value))
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

window.customElements.define("link-legales", linkLegales);