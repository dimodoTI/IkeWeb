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
} from "../css/carteles.js"

import {
    masInfo
} from "../../redux/actions/ui"

import {
    IKEASISTENCIA
}
from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideHogar extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-hogar);
            background-size: 100vw 100vh;
            background-position: center;
            height:100%;
            width:100%;
        }

        :host([media-size="small"])
        {
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
            background-image:var(--fondo-hogarphone);
            visibility:visible;
            background-size:100%;
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
        <div  media-size="${this.mediaSize}" style="padding:0" class="recuadro">
        <div class="cartel" media-size="${this.mediaSize}">
            <div class="opcion" media-size="${this.mediaSize}">HOGAR</div>
            <div class="titulo" media-size="${this.mediaSize}">
                <div >¿PROBLEMAS IMPREVISTOS?</div>
                <div >¿TU CASA TE DESBORDA?</div>
            </div>
            <div class="leyenda" media-size="${this.mediaSize}">
                Si olvidas o perdés tu llave te enviamos un cerrajero,<br>
                ante problemas eléctricos un especialista y <br>
                si el goteo no te deja dormir de noche <br>
                contás con nuestros plomeros de confianza
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
            },
        }

    }
}
window.customElements.define("slide-hogar", slideHogar);