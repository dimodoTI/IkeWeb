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
    submenuProductos
} from "./submenuProductos"

import {
    submenuSumarte
} from "./submenuSumarte"


import {
    IKE,
    BUSCAR,
    CART
} from "../../../assets/icons/icons"


export class appMenu extends connect(store)(LitElement) {
    constructor() {
        super();
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
            align-items:center;
            justify-items:center;
            padding:.4rem
        
        }
       
        .seleccionado{
            fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--disable-claro)
        }       

        .submenu{
            position:absolute;
            top:100%;
            left:0;
            width:100%;
            z-index:100;
        }
        `
    }

    render() {
        return html `
            <div class="boton" @click="${this.selectMenu}" .value="${"INSTITUCIONAL"}" >${IKE}</div>
            <div class="boton " @click="${this.selectMenu}" .value="${"INSTITUCIONAL"}">
                <div>Institucional</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"PRODUCTOS"}">
                <div>Productos</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"ATENCION_CLIENTE"}">
                
                <div>Atención al Cliente</div>
            </div>
            <div class="boton"  @click="${this.selectMenu}" .value="${"SUMARTE"}">
                <div>¿Querés sumarte a Iké?</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"CONTACTANOS"}">
                <div>Contactanos</div>
            </div>

            <div class="boton"  @click="${this.selectMenu}" .value="${"BUSQUEDA"}">
                <div>${BUSCAR}</div>
            </div>

            <submenu-productos class="submenu" id="submenu"></submenu-productos>
            <submenu-sumarte id="submenuSumarte" class="submenu"></submenu-sumarte>        
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
window.customElements.define("app-menu", appMenu);