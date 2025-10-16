import './card.css';
import { useNavigate } from 'react-router-dom';

export function PokemonCard({ pokemon }) {
    const navigate = useNavigate();

    const handleDetalle = (e) => {
        e.preventDefault();
        navigate(`/detalle/${pokemon.id}`);
    };

    return (
        <div className="card m-2 pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <button className="btn btn-primary my-2" onClick={handleDetalle}>
                    Detalles
                </button>
            </div>
        </div>
    );
}
