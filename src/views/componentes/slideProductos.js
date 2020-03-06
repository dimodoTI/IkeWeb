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



const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideProductos extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.current = "x"


    }

    static get styles() {
        return css `
   
        :host{
            display:grid;
            background-image: var(--fondo-productos);
            background-size: 100vw 100vh;
            background-position: center;
            height:100%;
            width:100%;
        }
        `
    }
    render() {
        return html `
        
        `
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-productos", slideProductos);