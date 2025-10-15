import './card.css';
import { useNavigate } from 'react-router-dom';

export function PokemonCard({ pokemon }) {
    const navigate = useNavigate();

    const handleDetalle = (e) => {
        e.preventDefault(); // Evita navegación si está dentro de un <Link>
        navigate(`/detalle/${pokemon.id}`);
    };

    return (
        <div className="card m-2 pokemon-card" style={{ width: '18rem' }}>
            <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <button className="btn btn-primary" onClick={handleDetalle}>
                    Detalles
                </button>
            </div>
        </div>
    );
}