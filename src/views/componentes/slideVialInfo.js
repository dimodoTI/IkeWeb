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

export class slideVialInfo extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-vialinfo);
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
                <div >VIAL</div>
            </div>
            <div class="leyenda">
                Con vos para solucionar<BR>
                cualquier percance en el camino.
            </div>
        <ul>
            <li> Cambio de neumático</li>
            <li> Cerrajería Automovilística</li>
            <li> Colocación de alarma</li>
            <li> Custodia de vehículo</li>
            <li> Extracción</li>
            <li> Grabado de cristales</li>
            <li> Mecánica ligera</li>
            <li> Paso de corriente</li>
            <li> Referencias Mecánicas</li>
            <li> Remis</li>
            <li> Remolque</li>
            <li> Suministro de combustible</li>
            <li> Traslado de acompañantes</li>  
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
window.customElements.define("slide-vial-info", slideVialInfo);