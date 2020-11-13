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
    TWIT,
    EMAIL,
    WHATSAPP
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

import {
    selectMenu
} from "../../redux/actions/ui"

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
            bottom:5.5rem;

        }

        :host([media-size="small"]){
            bottom: 3.5rem;
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


        .insta{
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
        .insta[media-size="small"]{
            width:1.8rem;
            height:1.8rem;
        }

        .insta svg{
            height:1.5rem;
            width:1.5em;
        }

        .insta[media-size="small"] svg{
            height:1rem;
            width:1rem;
        }

        

        .insta:hover{
            border:1px solid var(--color-destacado);
        }

        `
    }


    render() {
        return html `
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.linkedin}">${LINKE}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.facebook}">${FACE}</div>
        <div class="boton insta"  media-size="${this.mediaSize}" @click="${this.instagram}">${INSTA}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.twiter}">${TWIT}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.selectMenu}" .value="${"FORMULARIOINFO"}">${EMAIL}</div>
        <div class="boton botonete" media-size="${this.mediaSize}" @click="${this.whatsapp}">${WHATSAPP}</div>
        `

    }


    stateChanged(state, name) {
        if (name == MEDIA_SIZE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }
    }


    whatsapp() {

        var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (es_firefox) {
            window.open("https://web.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
        } else {
            window.open("https://api.whatsapp.com/send?phone=5491134427999&text=&source=&data=")
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


    selectMenu(e) {
        const botones = this.shadowRoot.querySelectorAll(".boton")
        botones.forEach((button) => {
            button.classList.remove("seleccionado")
        });
        e.currentTarget.classList.add("seleccionado")
        store.dispatch(selectMenu(e.currentTarget.value))
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