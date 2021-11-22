import React from "react";
import '../style/header.css'

export default function Header() {
    return (
        <div>
            <header>
                <h1>Pokedek</h1>

                <nav>
                    <a href="#">Geração</a>
                    <a href="#">Categoria</a>
                </nav>
            </header>

        </div>
    )
}