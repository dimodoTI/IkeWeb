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

import {
    MENU
} from "../../assets/icons/icons"

import {
    toggleMenu
} from "../redux/actions/ui"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
const MEDIA_SIZE = "ui.media.timeStamp"
const TOGGLE = "ui.menuOpen"

export class viewManager extends connect(store, OPCION_SELECCIONADA, MEDIA_SIZE, TOGGLE)(LitElement) {
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
      :host(:not([media-size="small"])) .btnMenu,:host(:not([media-size="small"])) #velo{
          display:none
      }
      
      .btnMenu{
          stroke:black;
          fill:black;
      }
      :host(:not([menu-open])) #velo{
            display:none
        }
        #velo{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,.5)
        }



        `
    }
    render() {
        return html `
        <div class="boton btnMenu" @click="${this.openMenu}">${MENU}</div>
        <app-menu id="menu" media-size="${this.mediaSize}"></app-menu>
        
        <app-slider id="slider" media-size="${this.mediaSize}"></app-slider>
        
        <hc2-spinner  type="2"></hc2-spinner>
        <div id="velo" @click="${this.openMenu}"></div>

        `
    }

    openMenu(e) {
        store.dispatch(toggleMenu())
        /*  this.shadowRoot.querySelector("#menu").open = !this.shadowRoot.querySelector("#menu").open
         this.menuOpen = this.shadowRoot.querySelector("#menu").open
         this.update() */


    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.option = state.ui.opcionSeleccionada.suboption
            this.update()
        }

        if (name == MEDIA_SIZE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }
        if (name == TOGGLE) {
            this.menuOpen = state.ui.menuOpen
            this.update()
        }

    }

    static get properties() {
        return {
            option: {
                type: String,
                reflect: true
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },
            menuOpen: {
                type: Boolean,
                reflect: true,
                attribute: "menu-open"
            }

        }
    }
}
window.customElements.define("view-manager", viewManager);