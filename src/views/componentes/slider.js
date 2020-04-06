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
    slideInstitucional
} from "../componentes/slideInstitucional"

import {
    slideProductos
} from "../componentes/slideProductos"

import {
    slideMultiasistencia
} from "../componentes/slideMultiasistencia"

import {
    slideHogar
} from "../componentes/slideHogar"

import {
    slideVial
} from "../componentes/slideVial"

import {
    slideMascotas
} from "../componentes/slideMascotas"

import {
    slideTecnologico
} from "../componentes/slideTecnologico"

import {
    slideBicicletas
} from "../componentes/slideBicicletas"

import {
    slideBicicletasInfo
} from "../componentes/slideBicicletasInfo"
import {
    slideHogarInfo
} from "../componentes/slideHogarInfo"
import {
    slideVialInfo
} from "../componentes/slideVialInfo"

import {
    slideMascotasInfo
} from "../componentes/slideMascotasInfo"

import {
    slideTecnologicoInfo
} from "../componentes/slideTecnologicoInfo"

import {
    slideAtencion
} from "../componentes/slideAtencion"

import {
    slideformularioInfo
} from "../componentes/slideFormularioInfo"


import {
    slideCobertura
} from "../componentes/slideCobertura"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class appSlider extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = false
        this.current = "x"
        this.currentSlide = "INSTITUCIONAL"

    }

    static get styles() {
        return css `
        
        :host{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            justify-items:center;
        }

       
        :host([oculto]) {
            display:none
        }

        :host(:not([currentslide="INSTITUCIONAL"])) #institucional,
        :host(:not([currentslide="PRODUCTOS"])) #productos,
        :host(:not([currentslide="PRODUCTOSHOGAR"])) #hogar,
        :host(:not([currentslide="PRODUCTOSVIAL"])) #vial,
        :host(:not([currentslide="PRODUCTOSMASCOTAS"])) #mascotas,
        :host(:not([currentslide="PRODUCTOSTECNOLOGICO"])) #tecnologico,       
        :host(:not([currentslide="PRODUCTOSBICICLETAS"])) #bicicletas,
        :host(:not([currentslide="PRODUCTOSHOGARINFO"])) #hogarinfo,
        :host(:not([currentslide="PRODUCTOSVIALINFO"])) #vialinfo,
        :host(:not([currentslide="PRODUCTOSMASCOTASINFO"])) #mascotasinfo,
        :host(:not([currentslide="PRODUCTOSTECNOLOGICOINFO"])) #tecnologicoinfo,
        :host(:not([currentslide="PRODUCTOSBICICLETASINFO"])) #bicicletasinfo,
        :host(:not([currentslide="ATENCION_CLIENTE"])) #atencion,
        :host(:not([currentslide="COBERTURAINFO"])) #coberturainfo,
        :host(:not([currentslide="FORMULARIOINFO"])) #formularioinfo{
            opacity:0;
            z-index:-10
        }           

        .vertical{
            display:grid;
            grid-auto-flow:row;
            font-size:.8rem;
            grid-gap:.3rem;
            justify-items:center;
            align-items:center
        }

       .slide{
           position:absolute;
           opacity:1;
           z-index:0;
           transition:all 1s
       }
        `
    }

    render() {
        return html `
        <slide-institucional class="slide" id="institucional"></slide-institucional>
        <!-- productos -->
        <slide-productos class="slide" id="productos"></slide-productos>
        

        <slide-hogar class="slide" id="hogar"></slide-hogar>
        <slide-hogar-info class="slide" id="hogarinfo"></slide-hogar-info>

        <slide-vial class="slide" id="vial"></slide-vial>
        <slide-vial-info class="slide" id="vialinfo"></slide-vial-info>

        <slide-mascotas class="slide" id="mascotas"></slide-mascotas>
        <slide-mascotas-info class="slide" id="mascotasinfo"></slide-mascotas-info>

        <slide-tecnologico class="slide" id="tecnologico"></slide-tecnologico>
        <slide-tecnologico-info class="slide" id="tecnologicoinfo"></slide-tecnologico-info>

        <slide-bicicletas class="slide" id="bicicletas"></slide-bicicletas>
        <slide-bicicletas-info class="slide" id="bicicletasinfo"></slide-bicicletas-info>

        <!-- Atencion Cliente -->
        <slide-atencion class="slide" id="atencion"></slide-atencion>

        <slide-cobertura class="slide" id="coberturainfo"></slide-cobertura>
        <slide-formulario-info class="slide" id="formularioinfo"></slide-formulario-info>
        `
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.currentSlide = state.ui.opcionSeleccionada.option + state.ui.opcionSeleccionada.suboption + state.ui.opcionSeleccionada.masInfo
        }
    }

    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            },
            currentSlide: {
                type: String,
                reflect: true
            }

        }

    }
}
window.customElements.define("app-slider", appSlider);