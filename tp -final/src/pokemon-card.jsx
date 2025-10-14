
import './card.css';

export function PokemonCard({pokemon}) {
    return (
        <>
        
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
        </div>
        
        </>
    );
}