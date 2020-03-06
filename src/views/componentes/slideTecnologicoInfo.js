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
    carteles
} from "../css/carteles"


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideTecnologicoInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.current = "x"
    }

    static get styles() {
        return css `
        ${carteles}
        :host{
            display:grid;
            background-image: var(--fondo-tecnologicoinfo);
            background-size: 100% 100%;
            background-position: center;
            height:100%;
            width:100%;
           
        }
        `
    }
    render() {
        return html `
        <div class="cartel">
            <div class="tituloInfo">
                <div >TECNOLÓGICO</div>
            </div>
            <div class="leyenda">
                Conectándote con lo último en tecnología.                
        </div>
        <ul>
            <li> Asesoramiento remoto las 24hs.</li>
            <li> Arreglo de pantalla de Celulares</li>
            <li> Configuración remota de equipos      </li>      
        </ul>

            
        </div>
        
        `
    }

    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-tecnologico-info", slideTecnologicoInfo);