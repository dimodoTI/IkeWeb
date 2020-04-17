import {
    html,
    LitElement
} from "lit-element";
import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers/connect"

export class alertaErrores extends connect(store, "ui.errorMessages")(LitElement) {
    constructor() {
        super();

    }
    render() {
        return html ``
    }
    stateChanged(state, i) {
        if (state.ui.errorMessages) {
            alert("ERROR :\n\n" + state.ui.errorMessages.reduce((text, msg) => {
                return text + "• " + msg.campo + ": " + msg.mensaje + "\n"
            }, ""))
        }
    }

}
window.customElements.define("alerta-errores", alertaErrores);