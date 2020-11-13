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
            padding-bottom:.5rem;
        }

        .cartel[media-size="small"]{
            align-self: start;
            justify-self: center;
            padding-top:1rem;
            margin-left:0;            
            width:100%;
            /* background: linear-gradient(180deg, rgba(46,46,46,1) 0%, rgba(232,232,232,0) 100%); */
            background: linear-gradient(rgb(20,20,20) 0%, rgb(46, 46, 46) 45%, rgba(200, 200, 200, 0) 100%);
            padding-left:3rem;

            
            justify-content: center;            
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

        .opcion[media-size="small"]{
            font-size:1.5rem;
        }

        .leyenda{
            font-size:.9rem;
            color:white;
            grid-auto-flow:row;
            align-self:center;
            justify-self: start;
            grid-gap:1rem;     
            font-weight:normal;  
            width:45%;
            text-align:justify           
        }

        .leyenda[media-size="small"]{
            font-size:1.3rem;
            align-self:start;
            color:white;
            width:90%;
            text-align:justify
        }

        .masinfo{
            color:var(--color-boton);
            font-weight:bolder;
            font-size:.8rem;
            cursor:pointer
        }

        .masinfo[media-size="small"]{
            color:var(--color-boton);
            font-weight:bolder;
            font-size:1.3rem;
            cursor:pointer
        }

        .tituloInfo{
            font-size:1.3rem;
            font-weight:bold;
            color:white
        }

        .tituloInfo[media-size="small"]{
            font-size:1.5rem;
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



         ul li[media-size="small"]{
            font-size:1.1rem;
            padding:.32rem;
            font-weight:bold
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

        .logoBottom{
            position: absolute;
            bottom: 4rem;
            right: 4rem;
        }

        .logoBottom[media-size="small"]{
            position: absolute;
            bottom: 2.3rem;
            right: 1rem;
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
            font-size: 1.1rem;
            cursor: pointer;
            padding-left: 3rem;
        }

        .conocerMas[media-size="small"]{
            font-size:1.3rem;
            padding-left:1rem;
            color:#FF440D
        }

        .logoSociales{
            .logoBottom{
            position: absolute;
            bottom: 4rem;
            left: 4rem;
        }

        .logoSociales svg{
            height: 52px;
            width: 52px;
            fill: white;
            stroke: white;
        }
        }
`