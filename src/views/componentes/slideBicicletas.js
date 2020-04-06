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

import {
    masInfo
} from "../../redux/actions/ui"

import {
    IKEASISTENCIA
}
from "../../../assets/icons/icons"


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideBicicletas extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-bicicletas);
            background-size: 100% 100%;
            background-position: center;
            height:100%;
            width:100%;
           
        }
        :host([media-size="small"]){
            background-image:none;
            grid-auto-flow:row;
            grid-template-rows:auto 9fr;
            background-color:rgb(112,99,96);
            padding:0;
        }


        .fondo{
            visibility:hidden
        }

        .fondo[media-size="small"] {
            background-image:var(--fondo-bicicletasphone);
            visibility:visible;
           
            background-repeat:no-repeat

        }
        .recuadro{
            align-self:center
        }
        .recuadro[media-size="small"]{
            background-color:rgb(112,99,96);
            background-image:linear-gradient(to bottom, #49403e, transparent);
        }
        `
    }
    render() {
        return html `
        <div  media-size="${this.mediaSize}"  class="recuadro">
        <div class="cartel" media-size="${this.mediaSize}">
            <div class="opcion">BICICLETAS</div>
            <div class="titulo">
                <div >QUE NADA DETENGA TUS GRANAS</div>
                <div >DE CUIDAR EL MEDIOAMBIENTE</div>
            </div>
            <div class="leyenda" media-size="${this.mediaSize}">
                Andá tranquilo, estamos para ayudarte si la bici te deja a pata
        </div>
            <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">Mas Información</div>
        </div>
        </div>
        <div class="fondo" media-size="${this.mediaSize}" >
            <div class="logoBottom">
             ${IKEASISTENCIA}
            </div>      
        </div>
        `
    }
    masInfo(e) {
        store.dispatch(masInfo())
    }
    stateChanged(state, name) {}

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            }
        }

    }
}
window.customElements.define("slide-bicicletas", slideBicicletas);