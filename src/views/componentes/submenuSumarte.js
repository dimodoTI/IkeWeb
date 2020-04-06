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
    PRESTADOR,
    PRODUCTOR,
    BACK
} from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
export class submenuSumarte extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            padding: 1rem
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
        :host([media-size="small"]){
            grid-auto-flow:row;
            padding:0;
            align-content:start;
            align-items:start
        }

        
        .seleccionado{
            fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--color-destacado)
        }

        :host(:not([media-size="small"])) .back {
          display:none
        }
 
        .back{
        justify-self:start
        }
        `
    }
    render() {
        return html `
        <div class="boton back" @click="${e=>this.oculto=true}">${BACK}</div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"PRESTADOR"}">
                <div>${PRESTADOR}</div>
                <div>Soy Prestador</div>
            </div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"PRODUCTOR"}">
            <div>${PRODUCTOR}</div>
                <div>Soy Productor</div>
            </div>
        
        `
    }

    selectMenu(e) {
        const botones = this.shadowRoot.querySelectorAll(".boton")
        botones.forEach((button) => {
            button.classList.remove("seleccionado")
        });
        e.currentTarget.classList.add("seleccionado")
        store.dispatch(selectSubmenu(e.currentTarget.value))
        store.dispatch(toggleMenu())

    }



    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "SUMARTE" || state.ui.opcionSeleccionada.suboption != ""
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
window.customElements.define("submenu-sumarte", submenuSumarte);