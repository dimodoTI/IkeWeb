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
    selectMenu,
    toggleMenu
} from "../../redux/actions/ui"

import {
    submenuProductos
} from "./submenuProductos"

import {
    submenuSumarte
} from "./submenuSumarte"


import {
    BACK,
    IKEASISTENCIA
} from "../../../assets/icons/icons"

const MENU = "ui.opcionSeleccionada.timeStamp"
const TOGGLE = "ui.menuOpen"
export class appMenu extends connect(store, MENU, TOGGLE)(LitElement) {
    constructor() {
        super();
        this.open = false
    }

    static get styles() {
        return css `
        ${boton}
        :host{
            position:relative;
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            background-color:rgb(0,0,0);
            /* align-items:baseline; */
            justify-items:center;
            padding-top: .5rem;
            /* padding-bottom: .5rem; */
            z-index:10;
            align-items: center;
            padding-bottom: 0;
            

        
        }
        :host([media-size="small"]){
            position:absolute;
            grid-auto-flow:row;
            width:70%;
            height:100%;
            z-index:1000;
            align-content:flex-start;
            justify-items:flex-start;
            padding-left:2rem;
            font-size:1.4rem;
            grid-gap:2rem;
            background-color:rgb(0,0,0,.9);
            padding-top:1rem;


        }


        :host([media-size="small"]:not([open])){
            display:none
        }
       
        .seleccionado{
            fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--disable-claro)
        }       
        :host([media-size="small"]) .submenu{
            top:0;
            background-color:gray;
            width:100%;
            height:100%
        }
        .submenu{
            position:absolute;
            top:100%;
            left:0;
            width:100%;
            z-index:100;
        }

        :host(:not([media-size="small"])) .back {

            display:none
        }
             
        .back{
            justify-self:start
        }

        :host([media-size="small"]) .ike{
            display:none;
        }

        .ike{padding:0;
            margin:0}

        .boton svg{
            height: 50px;
            width: 50px;
            fill: white;
            stroke: white;}
        `
    }

    render() {
        return html `
            <!-- <div class="boton back" @click="${e=>store.dispatch(toggleMenu())}">${BACK}</div> -->
            <div class="boton " @click="${this.selectMenu}" .value="${"INSTITUCIONAL"}" .autoClose="${true}">${IKEASISTENCIA}</div>

            <div class="boton back" @click="${this.selectMenu}" .value="${"INSTITUCIONAL"}" .autoClose="${true}" >${BACK}</div>
            <!-- <div class="boton " @click="${this.presentacion}" .value="${"INSTITUCIONAL"}"> -->
            <div class="boton " @click="${this.selectMenu}" .value="${"PRESENTACION"}">
                <div>Institucional</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"PRODUCTOS"}" .autoClose="${false}">
                <div>Contratá tu Plan</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"IKEMAS"}" .autoClose="${true}">               
                <div>Iké+ Beneficios</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"ATENCION_CLIENTE"}" .autoClose="${true}">               
                <div>Atención al Cliente</div>
            </div>
            <div class="boton"  @click="${this.selectMenu}" .value="${"SUMARTE"}" .autoClose="${false}" >
                <div>¿Querés sumarte al equipo Iké?</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"FORMULARIOINFO"}"  .autoClose="${true}">
                <div>Contactanos</div>
            </div>



            <submenu-productos class="submenu" id="submenu" media-size="${this.mediaSize}"></submenu-productos>
            <submenu-sumarte id="submenuSumarte" class="submenu" media-size="${this.mediaSize}"></submenu-sumarte>        
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
            option: e.currentTarget.value,
            suboption: "",
            masInfo: ""
        }
        window.history.pushState(window.estado, null, "");

        store.dispatch(selectMenu(e.currentTarget.value))

        if (e.currentTarget.autoClose) {
            this.open = false
            store.dispatch(toggleMenu())
            this.update()
        }


    }

    presentacion(e) {
        window.open("https://ikeargentina.com.ar/pruebaweb/Presentacion.pdf", "_self")
        this.selectMenu(e)
        this.open = false

        store.dispatch(toggleMenu())
    }


    stateChanged(state, name) {
        if (name == MENU) {
            if (state.ui.opcionSeleccionada.suboption != "") {
                this.open = false
                this.update()
            }
        }


        if (name == TOGGLE) {
            this.open = state.ui.menuOpen
            this.update()
        }


    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },
            open: {
                type: Boolean,
                reflect: true
            }
        }
    }
}
window.customElements.define("app-menu", appMenu);