import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="home">
            <h1 className="p-2">Bienvenido al Proyecto Pokédex</h1>
            <p className="p-2">
                Este proyecto es una Pokédex interactiva desarrollada con React. 
                Puedes explorar una lista de Pokémon y ver los detalles de cada uno
            </p>
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
                alt="Pikachu" 
                style={{ width: "400px" }}
            />
            <p>
                <strong>Propósito:</strong> Practicando crear aplicaciones web con React y utilizando APIs
            </p>
            <Link to="/pokemons"><button className="m-2">Ver Pokemons</button></Link>
        </div>
    );
}