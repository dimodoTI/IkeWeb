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
    selectSubmenu
} from "../../redux/actions/ui"

import {

    HOGAR,
    VIAL,
    MASCOTAS,
    TECNOLOGICO,
    BICICLETAS
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

        .seleccionado{
            fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--color-destacado)
        }
        `
    }
    render() {
        return html `

            <div class="boton vertical" @click="${this.selectMenu}" .value="${"HOGAR"}">
            <div>${HOGAR}</div>
                <div>Hogar</div>
            </div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"VIAL"}">
            <div>${VIAL}</div>
                <div>Vial</div>
            </div>
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"MASCOTAS"}">
            <div>${MASCOTAS}</div>
                <div>Mascotas</div>
            </div>
            <div class="boton vertical"  @click="${this.selectMenu}" .value="${"BICICLETAS"}">
                <div>${BICICLETAS}</div>
                <div>Bicicletas</div>
            </div>            
            <div class="boton vertical" @click="${this.selectMenu}" .value="${"TECNOLOGICO"}">
            <div>${TECNOLOGICO}</div>
                <div>Tecnológico</div>
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
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "PRODUCTOS"
        }
    }

    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            }

        }

    }
}
window.customElements.define("submenu-productos", submenuProductos);