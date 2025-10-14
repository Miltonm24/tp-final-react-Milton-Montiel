"use client"

import { useEffect } from "react";
import { useState } from "react";
import { PokemonCard } from "./pokemon-card";
import { Link } from "react-router-dom";    
export function PokemonList() {
    const [detalles, setDetalles] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            const data = await response.json();

            const detailedPokemons = await Promise.all(data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                return await res.json();
            }));
            const pokemonformatted = data.results.map((pokemon, index) => ({
                name: pokemon.name,
                image: detailedPokemons[index].sprites.front_default,
                id: detailedPokemons[index].id
            }));
            setDetalles(pokemonformatted);
        }

        fetchPokemons();

    }, []);



    return (
        <div className="pokemon-list">
            {detalles.map(pokemon => (
            <Link to={`/detalle/${pokemon.id}`} className="pokemon-card-link">
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </Link>
            ))}
        </div>
    );
}
