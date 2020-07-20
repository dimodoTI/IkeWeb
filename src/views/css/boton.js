import {
   css
} from "lit-element"

export const boton = css `
        .boton:hover {
     
           fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--color-destacado);           
        }

        .boton {

           display:grid;
           grid-auto-flow:column;
           align-items:center;
           grid-gap:.3rem;
           cursor:pointer;
           color:white;
           fill:white;
           stroke:white;           
        }

        .boton svg {
         width:52px;
           height:52px;
           fill:white;
           stroke:white; 
        }   

        .boton:hover svg{
         fill:var(--color-destacado);
           stroke:var(--color-destacado);
           color: var(--color-destacado);     
        }
`