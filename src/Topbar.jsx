import React from "react";
import { useNavigate } from 'react-router-dom';
import './topbar.css';

export function Topbar() {
    const navigate = useNavigate();

    return (
        <header className="topbar bg-primary text-white">
            <h4 className="brand m-0">Pokedex</h4>
            <nav>
                <button onClick={() => navigate('/')} className="text-white btn p-0 mx-4">HOME</button>
                <button onClick={() => navigate('/pokemons')} className="text-white btn p-0">POKEMONS</button>
            </nav>
        </header>
    );
}