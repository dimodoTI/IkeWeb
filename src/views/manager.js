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
} from "../redux/store";
import {
    boton
} from "./css/boton"
import {
    card
} from "./css/card"
import {
    appMenu
} from "./componentes/menu"


import {
    appSlider
} from "../views/componentes/slider"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class viewManager extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.option = ""
    }

    static get styles() {
        return css `
        ${boton}
        :host{
            display: grid;                 
            padding:2rem;
            height:100vh;
            width: 100vw;
            scrollbar-width: thin;
            scrollbar-color: #999 transparent;
            box-sizing: border-box;
            grid-template-rows: auto 1fr;
            padding:0
        }
        :host::-webkit-scrollbar-track
        {
            border-radius: .3rem;
            background-color: transparent;
        }
        :host::-webkit-scrollbar
        {
            width:.4rem;
        }
        :host::-webkit-scrollbar-thumb
        {
            border-radius: .3rem;
            background-color: #999
        }
      .submenu{
          position:absolute;
          
      }
        `
    }
    render() {
        return html `
        <app-menu id="menu"></app-menu>

        <app-slider id="slider"></app-slider>
        
        <hc2-spinner  type="2"></hc2-spinner>

        `
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.option = state.ui.opcionSeleccionada.suboption
            this.update()
        }
    }

    static get properties() {
        return {
            option: {
                type: String,
                reflect: true
            }

        }
    }
}
window.customElements.define("view-manager", viewManager);