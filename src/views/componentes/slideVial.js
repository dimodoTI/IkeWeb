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
            background-size: cover;
            height:100%;
            width:100%;
           
        }



        :host([media-size="small"]){         
            background-image:var(--fondo-vialphone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }`

    }
    render() {
        return html `
            
            <div class="cartel" media-size="${this.mediaSize}" >
                <div class="opcion" media-size="${this.mediaSize}">VIAL</div>
                <div class="titulo" media-size="${this.mediaSize}">
                    <div >¿PROBLEMAS CON TU AUTO?</div>
                    <div >¿A KM DE LA SOLUCIÓN?</div>
                </div>
                <div class="leyenda" media-size="${this.mediaSize}">
                Estamos a tu lado para ayudarte en el camino,
                todos los días, las 24 hs en servicio de grúa,
                cambio de neumáticos y batería, suministro de
                combustible e información sobre talleres y repuestos
                Estamos con vos en 90 minutos
                </div>
                <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">Mas Información</div>
            </div>
            </div>


        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}

        </div>           
        `
    }
    masInfo(e) {
        window.estado = {
            option: window.estado.option,
            suboption: window.estado.suboption,
            masInfo: true
        }
        dataLayer.push({
            event: 'pageview',
            page: {
                path: '/' + e.currentTarget.value,

            }
        });
        window.history.pushState(window.estado, null, "");
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