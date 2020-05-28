import {
    LitElement,
    html,
    css
} from "lit-element";


import {
    LINKEDIN,
    FACEBOOK,
    INSTAGRAM,
    TWITTER,
    LINKE,
    FACE,
    INSTA,
    TWIT
} from "../../../assets/icons/icons";

import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";

import {
    boton
} from "../css/boton"

const MEDIA_SIZE = "ui.media.timeStamp"
export class redesSociales extends connect(store, MEDIA_SIZE)(LitElement) {
    constructor() {
        super();

    }

    static get styles() {
        return css `
        ${boton}

        :host{
            display:grid;
            grid-auto-flow:column;
            background-color:transparent;
            grid-gap:.5rem;
            position:absolute;
            left:4rem;
            bottom:4rem;

        }

        :host([media-size="small"]){
            bottom: 2.6rem;
            left: 1.5rem;
        }


        .botonete[media-size="small"]{
            position:relative;
            display:grid;
            width:1.8rem;
            height:1.8rem;
            border-radius: 50%;
            border: 1px solid #ffffff;
            background-color: transparent;
            align-items:center;
            justify-items:center;
            fill:white;
            stroke:white;
            cursor:pointer;
            box-shadow:var(--shadow-elevation-4-bosx);
            z-index:var(--shadow-elevation-4-z);      
            

        }

        .botonete{
            position:relative;
            display:grid;
            width:2.3rem;
            height:2.3rem;
            border-radius: 50%;
            border: 1px solid #ffffff;
            background-color: transparent;
            align-items:center;
            justify-items:center;
            fill:white;
            stroke:white;
            cursor:pointer;
            box-shadow:var(--shadow-elevation-4-bosx);
            z-index:var(--shadow-elevation-4-z);
            
        }

        .botonete svg{
            height:1.5rem;
            width:1.5em;
        }

        .botonete[media-size="small"] svg{
            height:1rem;
            width:1rem;
        }

        

        .botonete:hover{
            border:1px solid var(--color-destacado);
        }




        `
    }


    render() {
        return html `
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.linkedin}">${LINKE}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.facebook}">${FACE}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.instagram}">${INSTA}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.twiter}">${TWIT}</div>
        `

    }


    stateChanged(state, name) {
        if (name == MEDIA_SIZE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }
    }




    linkedin(e) {
        window.open("https://www.linkedin.com/company/ike-argentina/?viewAsMember=true")
    }

    twiter(e) {
        window.open("https://twitter.com/ike_argentina")
    }

    facebook(e) {
        window.open("https://www.facebook.com/IkeArgentina/?ref=aymt_homepage_panel&eid=ARAEFqhrWw9QVSbgftO0IQPKOq_2-cdiDa09n10PQlYBzKPZjky1U5-R7VhAouG6K0PdPX_8LRXSTvBT")
    }

    instagram(e) {
        window.open("https://www.instagram.com/ike.argentina/?hl=es-la")
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

window.customElements.define("redes-sociales", redesSociales);