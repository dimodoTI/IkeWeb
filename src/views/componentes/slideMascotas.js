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

export class slideMascotas extends connect(store, OPCION_SELECCIONADA)(LitElement) {
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
            grid-template-rows:none;
            background-image: var(--fondo-mascotas);
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
            background-image:var(--fondo-mascotasphone);
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
        <div  media-size="${this.mediaSize}"  >
            <div class="cartel" media-size="${this.mediaSize}" class="recuadro">
                <div class="opcion" media-size="${this.mediaSize}">MASCOTAS</div>
                <div class="titulo" media-size="${this.mediaSize}">
                    <div >¿TU AMIGO TE NECESITA</div>
                    <div >Y NO SABES QUÉ HACER?</div>
                </div>
                <div class="leyenda" media-size="${this.mediaSize}">
                    Tenemos un equipo de profesionales listos<BR>
                    para darte la ayuda que necesita tu amigo fiel<BR>
                    en consultas veterinarias, consultas on line las 24 hs<BR>
                    con un veterinario y muchos servicios más,<BR>
                    para que en esos momentos vos y tu mascota<BR>
                    estén acompañados
                </div>
                 
                <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">
                    Mas Información
                </div>
            </div>
           
            
        </div>
        <div class="fondo" media-size="${this.mediaSize}" ></div>
        <div class="logoBottom" media-size="${this.mediaSize}">
            ${IKEASISTENCIA}
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
window.customElements.define("slide-mascotas", slideMascotas);