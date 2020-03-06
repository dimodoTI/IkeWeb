import {
   css
} from "lit-element"

export const contactos = css `
        
   .contactos:hover {
     
     fill:var(--color-destacado);
   }
   
  .contactos {
     display:grid;   
     grid-auto-flow:column;
     align-items:center;
     grid-gap:.3rem;
     cursor:pointer;
     color:white; 
  }

  .icono{
     display:grid;
     margin:1rem;
     padding:.2rem;
  }

  .descrip{
     color:black;
     font-size: .9rem;
     font-weight:bold;
     align-self:center
  }

  .contacto{
     display:grid;
     grid-auto-flow:row
  }
`