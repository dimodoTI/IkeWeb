import {
    css
} from "lit-element"

export const carteles = css `

        .cartel {
            position: relative;
            display: grid;
            grid-auto-flow: row;
            align-self: center;
            justify-self: start;
            margin-left: 3rem;
            gap: 1rem;
            padding: 0.5rem;
        }
        
        .titulo{
            font-size:1.1rem;
            font-weight:bold;
            color:white
        }

        .opcion{
            color:var(--color-boton);
            font-size:.8rem;
        }

        .leyenda{
            font-size:.9rem;
            color:white;
            grid-auto-flow:row;
            align-self:center;
            justify-self: start;
            grid-gap:1rem;     
            font-weight:normal;             
        }

        .masinfo{
            color:var(--color-boton);
            font-weight:bolder;
            font-size:.8rem;
            cursor:pointer
        }

        .tituloInfo{
            font-size:1.3rem;
            font-weight:bold;
            color:white
        }

        ul{
           color:white;
            list-style:none
         }

         ul{
           color:white;
            list-style:none;
            margin:0;
            padding:0
         }

         ul li{
            font-size:.8rem;
            padding:.32rem;
         }
           
         ul li::before {
            content: "\\2022";
            color: var(--color-boton);
            width: 1rem;
            
            
            }
         
        .tituloInstitucional {
            font-size: 1.8rem;
            font-weight: bold;
            color: white;
        }

        .logoBottom {
            position: absolute;
            bottom: 4rem;
            right: 3rem;
        }

        .logoBottom svg {
            height: 52px;
            width: 52px;
            fill: white;
            stroke: white;
        }
        .conocerMas {
            color: #ff6c0c;
            font-weight: bolder;
            font-size: 0.9rem;
            cursor: pointer;
            padding-left: 3rem;
        }
`