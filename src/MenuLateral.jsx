import React from "react";

export function MenuLateral() {
    return (
        <nav className="bg-primary text-white p-4" style={{ minWidth: "200px", minHeight: "100vh" }}>
            <h4>Menú</h4>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/pokemons">Pokemons</a>
                </li>
            </ul>
        </nav>
    );
}
