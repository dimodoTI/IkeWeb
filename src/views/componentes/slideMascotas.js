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
            background-image: var(--fondo-mascotas);
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
            <div class="opcion">MASCOTAS</div>
            <div class="titulo">
                <div >¿TU AMIGO TE NECESITA</div>
                <div >Y NO SABES QUÉ HACER?</div>
            </div>
            <div class="leyenda">
                Tenemos un equipo de profesionales listos<BR>
                para darte la ayuda que necesita tu amigo fiel<BR>
                en consultas veterinarias, consultas on line las 24 hs<BR>
                con un veterinario y muchos servicios más,<BR>
                para que en esos momentos vos y tu mascota<BR>
                estén acompañados
            </div>
            <div class="masinfo" @click="${this.masInfo}">Mas Información</div>
        </div>

        `
    }
    masInfo(e) {
        store.dispatch(masInfo())
    }


    stateChanged(state, name) {}

    static get properties() {
        return {

        }

    }
}
window.customElements.define("slide-mascotas", slideMascotas);