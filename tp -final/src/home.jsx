import React from "react";
import { Link } from "react-router-dom";
export function Home() {
    return (
        <div className="home">
            <h1>Bienvenido al Proyecto Pokédex</h1>
            <p>
                Este proyecto es una Pokédex interactiva desarrollada con React. 
                Puedes explorar una lista de Pokémon, ver los detalles de cada uno
            </p>
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
                alt="Pikachu" 
                style={{ width: "500px" }}
            />
            <p>
                <strong>Propósito:</strong> practicando crear aplicaciones web con react y utilizando APIs
            </p>
            <Link to="/pokemons"><button>Ver Pokemons</button></Link>
        </div>
    );
}