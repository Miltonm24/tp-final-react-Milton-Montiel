import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Detalles() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (response.ok) {
                const data = await response.json();
                setPokemon(data);
            } else {
                setPokemon(null);
            }
            setLoading(false);
        };
        fetchPokemon();
    }, [id]);

    if (loading) return <div>No te apures...</div>;
    if (!pokemon) return <div>No lo encontre jeje</div>;

    return (
        <div className="m-2 pokemon-card" style={{ width: '25rem' }}>
            <div
                className="card"
                style={{
                    background: "#002157",
                    color: "#FFD100",
                    border: "3px solid #FFD100"
                }}
            >
                <img
                    src={pokemon.sprites.front_default}
                    className="card-img-top"
                    alt={pokemon.name}
                    style={{ background: "#FFD100" }}
                />
                <div className="card-body">
                    <h1 className="card-title text-capitalize" style={{ color: "#FFD100" }}>{pokemon.name}</h1>
                    <p className="card-text"><strong>ID:</strong> {pokemon.id}</p>
                    <p className="card-text"><strong>Altura:</strong> {(pokemon.height / 10).toFixed(2)} m</p>
                    <p className="card-text"><strong>Peso:</strong> {(pokemon.weight / 10).toFixed(2)} kg</p>
                    <p className="card-text">
                        <strong>Tipos:</strong>{" "}
                        {pokemon.types.map(t => t.type.name).join(", ")}
                    </p>

                    <button
                        className="btn mt-3"
                        style={{
                            background: "#FFD100",
                            color: "#002157",
                            fontWeight: "bold",
                            border: "2px solid #002157"
                        }}
                        onClick={() => navigate("/pokemons")}
                    >
                        Queres volver a buscar???
                    </button>
                </div>
            </div>
        </div>
    );
}