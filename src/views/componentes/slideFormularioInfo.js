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
    boton
} from "../css/boton"

import {
    selectMenu,
    showError,
    hideError
} from "../../redux/actions/ui"



import {
    WHATSAPP,
    PHONE,
    MAIL,
    FORMULARIO,
    MICOBERTURA,
    FACTURA,
    PREGUNTAS,
    PREGUNTASWHITE,
    FACTURAWHITE,
    IKEASISTENCIA
} from "../../../assets/icons/icons"




export class slideFormularioInfo extends connect(store)(LitElement) {
    constructor() {
        super();
    }

    static get styles() {
        return css `
        ${boton}
        :host{
            display:grid;
            background-image: var(--fondo-formulario);
            background-size: 100% 100%;
            background-position: center;
            background-size: cover;
            height:100%;
            width:100%;           
        }

        :host([media-size="small"]){
            background-image: var(--fondo-formulariophone);
            background-repeat:no-repeat;
            background-position:center; 
            background-size:cover;     
            
        }

        .formulario{
            display:grid;
             grid-auto-flow:row;
             grid-template-rows: 1fr .3fr auto auto auto auto 2fr;
             padding-left:3rem;
             grid-gap:.5rem;

        }

        .formulario[media-size="small"]{
            padding-left:1rem;
        }

        .cabecera{
            display:grid;
            font-size:2rem;
            font-weight:bold;
            color:white;
            padding-top:3rem
        }

        .subcabecera{
            display:grid;
            font-size:.8rem;
            color:white
        }

        .subcabecera[media-size="small"]{
            display:grid;
            font-size:1.3rem;
            color:white;
            padding-bottom:1rem;
        }
        .texto {
            display:grid;
            width:27rem;
            background-color:white;
            height:3rem
        }        

        .botonenviar{
            display:grid;
            width:27rem;
            background-color:var(--color-boton);
            align-items:center;
            justify-items:center;
            height:3rem;
            cursor:pointer

        }
        textarea::placeholder{
            font-size:1.2rem;
            color:var(--color-boton);
            font-family: "Avenir, sans-serif";
        }
        textarea{
            font-family: 'Avenir', sans-serif;
            font-size:1.1rem
        }
        `
    }

    render() {
        return html `
            <div class="formulario" media-size="${this.mediaSize}">
                <div class="cabecera">ENVIANOS<BR>TU CONSULTA</div>
                <div class="subcabecera"  media-size="${this.mediaSize}">Por favor, completá tus datos con tus comentarios y te responderemos a la brevedad</div>
                <nano-input class="texto" type="text" label="Nombre" id="nombre"></nano-input>
                <nano-input class="texto" type="text" label="Email" id="mail"></nano-input>
                <nano-input class="texto" type="text" label="Telefono" id="telefono"></nano-input>
                <div><textarea  style="width:26.7rem;" rows="5"  id="comentario" type="text" placeholder="Comentarios"></textarea></div>
                <div class="botonenviar" id="boton" @click="${this.enviar}" .presionado=${false}>ENVIAR</div>
            </div>
               
        `
    }

    enviar(e) {

        if (!e.currentTarget.presionado) {
            let errores = this.validarCampos()
            e.currentTarget.presionado = true;
            if (!errores) {
                //e.currentTarget.presionado = true
                this.sendMail()


            } else {

                store.dispatch(showError(errores))
                //e.currentTarget.presionado = true

            }
            e.currentTarget.presionado = false

        }
        //}

    }






    validarCampos() {
        const errores = []
        let nombre = this.shadowRoot.querySelector("#nombre").value
        let email = this.shadowRoot.querySelector("#mail").value
        let telefono = this.shadowRoot.querySelector("#telefono").value
        let comentario = this.shadowRoot.querySelector("#comentario").value

        if (nombre == "") {
            errores.push({
                campo: "Nombre",
                mensaje: "No puede ser Vacio"

            })
        }

        if (email == "" || !this.validaMail(email)) {
            errores.push({
                campo: "Mail",
                mensaje: "Mail Incorrecto"

            })
        }

        if (telefono == "") {
            errores.push({
                campo: "Telefono",
                mensaje: "No puede ser Vacio"

            })
        }

        return errores.length == 0 ? null : errores;

    }


    validaMail(email) {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) ? true : false;
    }


    sendMail(e) {


        let nombre = this.shadowRoot.querySelector("#nombre").value
        let email = this.shadowRoot.querySelector("#mail").value
        let telefono = this.shadowRoot.querySelector("#telefono").value
        let comentario = this.shadowRoot.querySelector("#comentario").value

        let cuerpo = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            comentario: comentario
        }

        fetch("https://servicio-email.herokuapp.com/ike-mail", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cuerpo)
        }).then(
            (response) => {
                //console.log(response);

                alert("Su consulta ha sido enviada y será contactado por un operador IKE")
                let nombre = this.shadowRoot.querySelector("#nombre")
                let email = this.shadowRoot.querySelector("#mail")
                let telefono = this.shadowRoot.querySelector("#telefono")
                let comentario = this.shadowRoot.querySelector("#comentario")
                nombre.value = ""
                email.value = ""
                telefono.value = ""
                comentario.value = ""

                store.dispatch(selectMenu("ATENCION_CLIENTE"))
            }
        ).catch((response) => {
            alert("Su email no pudo ser enviado, intente mas tarde")
            let nombre = this.shadowRoot.querySelector("#nombre")
            let email = this.shadowRoot.querySelector("#mail")
            let telefono = this.shadowRoot.querySelector("#telefono")
            let comentario = this.shadowRoot.querySelector("#comentario")
            nombre.value = ""
            email.value = ""
            telefono.value = ""
            comentario.value = ""

            store.dispatch(selectMenu("ATENCION_CLIENTE"))
        });
    }



    stateChanged(state, name) {

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
window.customElements.define("slide-formulario-info", slideFormularioInfo);