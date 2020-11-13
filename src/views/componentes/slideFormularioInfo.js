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
    select
}
from "../css/select"

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
        this.hidden = false

    }

    static get styles() {
        return css `
        ${boton}
        ${select}
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
             grid-template-rows: 1fr .3fr auto  auto auto auto auto auto 2fr;
             padding-left:3rem;
             grid-gap:.3rem;

        }

        .formulario[media-size="small"]{
            padding-left:1rem;
        }

        .cabecera{
            display:grid;
            font-size:2rem;
            font-weight:bold;
            color:white;
            padding-top:2rem
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
            padding-bottom:.8rem;
        }
        .texto {
            display:grid;
            width:27rem;
            background-color:white;
            height:2rem;
            font-size:1rem;
        }        

        .botonenviar{
            display:grid;
            width:27rem;
            background-color:var(--color-boton);
            align-items:center;
            justify-items:center;
            height:2.7rem;
            cursor:pointer
        }

        textarea::placeholder{
            font-size:1rem;
            color: var(--color-boton);
            font-family:inherit;
            background-color:white;
        }

        textarea{
            font-family: inherit;
            font-size:1rem;
            padding-left:.5rem
        }

        .texto input::-webkit-outer-spin-button,
        .texto input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

/* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }
        `
    }

    render() {
        return html `
            <div class="formulario" media-size="${this.mediaSize}">
                <div class="cabecera">ENVIANOS<BR>TU CONSULTA</div>
                <div class="subcabecera"  media-size="${this.mediaSize}">Por favor, completá tus datos con tus comentarios y te responderemos a la brevedad</div>
                <nano-input class="texto" type="text" label="Nombre" id="nombre" value=""></nano-input>
                <select class="texto" id="motivo" style="color:var(--color-boton);padding-top:.3rem;padding-left:.3rem" @change="${this.cambiar}">
                    <option value=0 disabled selected>Motivo de Consulta</option>
                    <option value=1 >Adquirir producto</option>
                    <option value=2>Cambiar mis datos personales</option>
                    <option value=3>Cambiar el medio de cobro</option>
                    <option value=4>Consultar mi cobertura</option>
                    <option value=5>Dudas sobre el cobro</option>
                    <option value=6>Reclamo</option>
                    <option value=7>Otro</option>
                </select>
                <nano-input class="texto" type="text" label="Email" id="mail"></nano-input>
                <nano-input class="texto" type="text" label="Teléfono" id="telefono"></nano-input>
                <nano-input class= "texto" type="number" label="DNI" id="dni"></nano-input>
                <div><textarea  style="width:26.35rem;" rows="5"  id="comentario" type="text" placeholder="Comentarios"></textarea></div>
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

    cambiar(e) {
        e.currentTarget.style.color = "black"
        this.update()
    }

    firstUpdated() {
        this.shadowRoot.querySelector("#nombre").value = ""
        this.update()
    }






    validarCampos() {
        const errores = []
        let nombre = this.shadowRoot.querySelector("#nombre").value
        let email = this.shadowRoot.querySelector("#mail").value
        let telefono = this.shadowRoot.querySelector("#telefono").value
        let comentario = this.shadowRoot.querySelector("#comentario").value
        let motivo = this.shadowRoot.querySelector("#motivo").value
        let dni = this.shadowRoot.querySelector("#dni").value

        if (motivo == 0) {
            errores.push({
                campo: "Motivo",
                mensaje: "Debe seleccionar una opción"

            })
        }

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

        if (motivo!=1 && dni==0 ){
            errores.push({campo:"DNI",
            mensaje:"No puede estar vacio"});
        }

        if (motivo == 7 && comentario == "") {
            errores.push({
                campo: "Comentario",
                mensaje: "Seleccionando como Motivo Otros, debe completar el campo Comentarios"

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
        let motivo = this.shadowRoot.querySelector("#motivo")
        let dni = this.shadowRoot.querySelector("#dni").value
        let comentario = "Motivo: " + motivo.options[motivo.selectedIndex].text + " " + "Comentario: " + this.shadowRoot.querySelector("#comentario").value

        /*         let cuerpo = {
                    nombre: nombre,
                    email: email,
                    telefono: telefono,
                    comentario: comentario
                } */

        let cuerpo = {
            "token": "eyJ0eXAiUE8Kl_V8KroQTU1ODEuNDI2OTkzIiwidmFsaWQiOiIyMDIwLTA2LTMwIDE4OjA5OjI0In0._ljVd3FJYFdRnSwdfMeohiJXybn",
            "email_destinatario": email,
            "nombre_destinatario": nombre,
            "parametro_1": telefono,
            "parametro_2": dni,
            "cuerpo": comentario,
            "id_tipo_comunicacion": 1
        }


        let dominio = window.location.href.toUpperCase()

        if (dominio.indexOf("WWW") > -1) {
            dominio = "https://www.ikeargentina.com.ar/ikeapirestful/api/sendemail"


        } else {
            dominio = "https://ikeargentina.com.ar/ikeapirestful/api/sendemail"
        }



        fetch(dominio, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cuerpo)
        }).then(
            (response) => {
                //console.log(response);

                alert("Su consulta ha sido enviada y será contactado por un operador Iké Argentina dentro de las próximas 72 hs hábiles")
                let nombre = this.shadowRoot.querySelector("#nombre")
                let email = this.shadowRoot.querySelector("#mail")
                let telefono = this.shadowRoot.querySelector("#telefono")
                let comentario = this.shadowRoot.querySelector("#comentario")
                let motivo = this.shadowRoot.querySelector("#motivo")
                nombre.value = ""
                email.value = ""
                telefono.value = ""
                comentario.value = ""
                motivo.value = 0

                store.dispatch(selectMenu("ATENCION_CLIENTE"))
            }
        ).catch((response) => {
            alert("Su email no pudo ser enviado, intente mas tarde")
            let nombre = this.shadowRoot.querySelector("#nombre")
            let email = this.shadowRoot.querySelector("#mail")
            let telefono = this.shadowRoot.querySelector("#telefono")
            let comentario = this.shadowRoot.querySelector("#comentario")
            let motivo = this.shadowRoot.querySelector("#motivo")
            nombre.value = ""
            email.value = ""
            telefono.value = ""
            comentario.value = ""
            motivo.value = 0

            store.dispatch(selectMenu("ATENCION_CLIENTE"))
        });



        /*  fetch("https://servicio-email.herokuapp.com/ike-mail", {
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
         }); */
    }



    stateChanged(state, name) {

    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: "media-size"
            },
            hidden: {
                type: Boolean,
                reflect: true
            }
        }
    }
}
window.customElements.define("slide-formulario-info", slideFormularioInfo);