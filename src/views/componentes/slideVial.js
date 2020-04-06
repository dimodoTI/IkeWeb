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
} from "../../../assets/icons/icons"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class slideVial extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            background-image: var(--fondo-vial);
            background-size: 100vw 100vh;
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
            background-image:var(--fondo-vialphone);
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
            <div  media-size="${this.mediaSize}" class="recuadro">
            <div class="cartel" media-size="${this.mediaSize}" >
                <div class="opcion" media-size="${this.mediaSize}">VIAL</div>
                <div class="titulo" media-size="${this.mediaSize}">
                    <div >¿PROBLEMAS CON TU AUTO?</div>
                    <div >¿A KM DE LA SOLUCIÓN?</div>
                </div>
                <div class="leyenda" media-size="${this.mediaSize}">
                Estamos a tu lado para ayudarte en el camino,<BR>
                todos los días, las 24 hs en servicio de grúa,<BR>
                cambio de neumáticos y batería, suministro de<BR>
                combustible e información sobre talleres y repuestos<BR>
                Estamos con vos en 90 minutos
                </div>
                <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">Mas Información</div>
            </div>
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
window.customElements.define("slide-vial", slideVial);