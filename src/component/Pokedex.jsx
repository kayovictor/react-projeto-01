import React from "react";
import '../style/pokdek.css'
import img from '../imagem/img.jpg';

export default function Pokedek(){
    return(
        <div>
            <img src={img} alt="pokedek" width='800'/>
        </div>
    )
}