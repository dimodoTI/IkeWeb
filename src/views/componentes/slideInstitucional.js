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

} from "../../../css/imagenes.css"

import {
    carteles
} from "../css/carteles"

import {
    IKEASISTENCIA
} from "../../../assets/icons/icons"
import {
    selectMenu,
    selectSubmenu
} from "../../redux/actions/ui";

import {
    redesSociales
} from "../componentes/redessociales"

import {linkLegales} from "../componentes/legales"



const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
const MEDIA_SIZE = "ui.media.timeStamp"
export class slideInstitucional extends connect(store, OPCION_SELECCIONADA, MEDIA_SIZE)(LitElement) {
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
            background-image:var(--fondo-institucional);
            background-size: 100vw 100vh;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;
            overflow-y:auto;
            


        }

        :host([media-size="small"]){
            background-image:var(--fondo-institucionalphone);
        }

        .cartel[media-size="small"]{
            align-self:flex-start;
            
        }
        .leyenda[media-size="small"]{
            width:90%;
            font-size:1.05rem

        }
        .legales{
            position:absolute;
            bottom: 4rem;
            left:10rem;
            color:white;
            font-size:.6rem;
            cursor: pointer

        }
        `
    }
    render() {
        return html `
        
            <div class="cartel" media-size="${this.mediaSize}" >
                <div class="tituloInstitucional" media-size="${this.mediaSize}">
                    ESTAMOS EN TU VIDA<br>PARA APOYARTE
                </div>
                <div class="leyenda" media-size="${this.mediaSize}">
                Somos solucionadores de problemas cotidianos y estamos a tu disposición frente a diversas problemáticas que puedan surgir en tu día  a día. Nuestra idea es siempre estar ahí, para hacerte la vida más  fácil.
                Estamos al lado tuyo cuando vos, tu familia, tu mascota, tu auto o tu  hogar nos necesiten. Para que mientras nosotros nos ocupamos del  problema, vos puedas seguir tranquilamente con tu vida

                </div>
                <!-- <div class="masinfo" @click="${this.masInfo}"  media-size="${this.mediaSize}">Mas Información</div> -->
            </div>
            <div class="logoBottom" media-size="${this.mediaSize}">
                    ${IKEASISTENCIA}
            </div>   
            <redes-sociales></redes-sociales>
            
            <link-legales id="legales"></link-legales>
               
        `
    }

    legales(){
        const legales = this.shadowRoot.querySelector("#legales")
        legales.style.visibility="visible"
    }

    masInfo() {

        store.dispatch(selectMenu("PRODUCTOS"))
        store.dispatch(selectSubmenu("HOGAR"))
    }

    stateChanged(state, name) {
        if (name == MEDIA_SIZE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }


    }

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
window.customElements.define("slide-institucional", slideInstitucional);