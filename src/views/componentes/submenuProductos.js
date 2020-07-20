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
    selectSubmenu,
    toggleMenu
} from "../../redux/actions/ui"

import {

    HOGAR,
    VIAL,
    MASCOTAS,
    TECNOLOGICO,
    BICICLETAS,
    BACK,
    NEWHOGAR,
    NEWVIAL,
    NEWMASCOTAS,
    NEWBICICLETAS,
    NEWTECNOLOGICO
} from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
export class submenuProductos extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.current = "x"

    }

    static get styles() {
        return css `
        ${boton}
        :host{
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            background-color:rgb(0,0,0,.3);
            align-items:center;
            justify-items:center;
            padding: 1rem;        
        }
        :host([oculto]) {
            display:none
        }

        .vertical{
            display:grid;
            grid-auto-flow:row;
            font-size:.8rem;
            grid-gap:.3rem;
            justify-items:center;
            align-items:center
        
        }

        .vertical[media-size="small"]{
            grid-auto-flow:column;
            font-size:1.5rem
        }

        .seleccionado{
            fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--color-destacado)
        }
        :host([media-size="small"]){
            grid-auto-flow:row;
            padding:0;
            justify-items:left;
            align-items:left;
            padding-left:1rem;
            align-content:flex-start;
            justify-items:flex-start;
            

        }

        :host([media-size="small"]) .vertical{
            grid-gap:3rem
        }

        :host(:not([media-size="small"])) .back {
          display:none
        }
 
        .back{
            justify-self:start;
            padding-bottom: 3rem;
            padding-top: 1rem;
        }
 
    .subop[media-size="small"]{
        padding-left:1.3rem
    }
        `
    }

    render() {
        return html `
            <div class="boton back" @click="${e=>this.oculto=true}">${BACK}<div style="font-weight:bold;padding-left:1rem">PRODUCTOS</div> </div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"HOGAR"}" media-size="${this.mediaSize}">
                <div>${NEWHOGAR}</div>
                <div class="subop"  media-size="${this.mediaSize}">Hogar</div>
            </div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"VIAL"}" media-size="${this.mediaSize}">
                <div>${NEWVIAL}</div>
                <div class="subop"  media-size="${this.mediaSize}">Vial</div>
            </div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"MASCOTAS"}" media-size="${this.mediaSize}">
                <div>${NEWMASCOTAS}</div>
                <div class="subop"  media-size="${this.mediaSize}">Mascotas</div>
            </div>
            <div class="boton vertical"  @click="${this.selectMenu}" .value="${"BICICLETAS"}" media-size="${this.mediaSize}">
                <div>${NEWBICICLETAS}</div>
                <div class="subop"  media-size="${this.mediaSize}">Bicicletas</div>
            </div>            
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"TECNOLOGICO"}" media-size="${this.mediaSize}">
                <div>${NEWTECNOLOGICO}</div>
                <div class="subop"  media-size="${this.mediaSize}">Tecnológico</div>
            </div>
  
        `
    }


    selectMenu(e) {
        const botones = this.shadowRoot.querySelectorAll(".boton")
        botones.forEach((button) => {
            button.classList.remove("seleccionado")
        });
        e.currentTarget.classList.add("seleccionado")

        dataLayer.push({
            event: 'pageview',
            page: {
                path: '/' + e.currentTarget.value,

            }
        });

        window.estado = {
            option: window.estado.option,
            suboption: e.currentTarget.value,
            masInfo: ""
        }
        window.history.pushState(window.estado, null, "");

        store.dispatch(selectSubmenu(e.currentTarget.value))
        store.dispatch(toggleMenu())
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "PRODUCTOS" || state.ui.opcionSeleccionada.suboption != ""
        }
    }

    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },


        }
    }
}

window.customElements.define("submenu-productos", submenuProductos);