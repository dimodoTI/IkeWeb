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

import {
    slideSumarte
} from "../componentes/slideSumarte"

import {
    slidePresentacion
} from "../componentes/slidePresentacion"

import {
    slideIkemas
} from "../componentes/slideIkemas"


import {
    slideIkemax
} from "../componentes/slideIkemax"
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
        :host(:not([currentslide="PRESENTACION"])) #presentacion, 
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
        :host(:not([currentslide="SUMARTE"])) #sumarte,
        :host(:not([currentslide="IKEMAS"])) #ikemas,
        :host(:not([currentslide="PRODUCTOSIKEMAX"])) #ikemax,
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
           transition:all 1s;
        
       }
        `
    }

    render() {
        return html `
        <slide-institucional class="slide" id="institucional" media-size="${this.mediaSize}"></slide-institucional>
        <slide-presentacion class="slide" id="presentacion" media-size="${this.mediaSize}"></slide-presentacion>
        <!-- productos -->
        <slide-productos class="slide" id="productos" media-size="${this.mediaSize}"></slide-productos>
        

        <slide-hogar class="slide" id="hogar" media-size="${this.mediaSize}"></slide-hogar>
        <slide-hogar-info class="slide" id="hogarinfo" media-size="${this.mediaSize}"></slide-hogar-info>

        <slide-vial class="slide" id="vial" media-size="${this.mediaSize}"></slide-vial>
        <slide-vial-info class="slide" id="vialinfo" media-size="${this.mediaSize}"></slide-vial-info>

        <slide-mascotas class="slide" id="mascotas" media-size="${this.mediaSize}"></slide-mascotas>
        <slide-mascotas-info class="slide" id="mascotasinfo" media-size="${this.mediaSize}"></slide-mascotas-info>

        <slide-tecnologico class="slide" id="tecnologico" media-size="${this.mediaSize}"></slide-tecnologico>
        <slide-tecnologico-info class="slide" id="tecnologicoinfo"  media-size="${this.mediaSize}"></slide-tecnologico-info>

        <slide-bicicletas class="slide" id="bicicletas" media-size="${this.mediaSize}"></slide-bicicletas>
        <slide-bicicletas-info class="slide" id="bicicletasinfo" media-size="${this.mediaSize}" ></slide-bicicletas-info>

        <slide-ikemax class="slide" id="ikemax" media-size="${this.mediaSize}"></slide-ikemax>        

        <!-- Atencion Cliente -->
        <slide-atencion class="slide" id="atencion" media-size="${this.mediaSize}"></slide-atencion>

        <slide-cobertura class="slide" id="coberturainfo" media-size="${this.mediaSize}"></slide-cobertura>
        <slide-formulario-info class="slide" id="formularioinfo"  media-size="${this.mediaSize}"></slide-formulario-info>
        <slide-sumarte class="slide" id="sumarte" media-size="${this.mediaSize}"></slide-sumarte>
        <slide-ikemas class="slide" id="ikemas" media-size="${this.mediaSize}"></slide-ikemas>>

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
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },

        }

    }
}
window.customElements.define("app-slider", appSlider);