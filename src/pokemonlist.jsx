"use client"

import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemon-card";

export function PokemonList() {
    const [detalles, setDetalles] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchPokemons = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
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

            setDetalles(prev => {
                const existingIds = new Set(prev.map(p => p.id));
                const newPokemons = pokemonformatted.filter(p => !existingIds.has(p.id));
                return [...prev, ...newPokemons];
            });
        } catch (err) {
            console.error('Error fetching pokemons:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [offset]);

    const handleVerMas = () => {
        setOffset(prev => prev + 50);
    };

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-list">
                {detalles.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className="load-more">
                <button onClick={handleVerMas} disabled={loading}>
                    {loading ? "espere jeje..." : "Queres mas? "}
                </button>
            </div>
        </div>
    );
}