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
            background-image:var(--fondo-mascotasphone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;       
        }     
        

        `
    }
    render() {
        return html `
            <div class="cartel" media-size="${this.mediaSize}" class="recuadro">
                <div class="opcion" media-size="${this.mediaSize}">MASCOTAS</div>
                <div class="titulo" media-size="${this.mediaSize}">
                    <div >¿TU AMIGO TE NECESITA</div>
                    <div >Y NO SABES QUÉ HACER?</div>
                </div>
                <div class="leyenda" media-size="${this.mediaSize}">
                    Tenemos un equipo de profesionales listos
                    para darte la ayuda que necesita tu amigo fiel
                    en consultas veterinarias, consultas on line las 24 hs
                    con un veterinario y muchos servicios más,
                    para que en esos momentos vos y tu mascota
                    estén acompañados
                </div>
                 
                <div class="masinfo" @click="${this.masInfo}" media-size="${this.mediaSize}">
                    Mas Información
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
window.customElements.define("slide-mascotas", slideMascotas);