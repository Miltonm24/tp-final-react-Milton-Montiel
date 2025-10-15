import './App.css';
import { PokemonList } from './pokemonlist';
import { Detalles } from './detalles';
import { Home } from './Home';
import { MenuLateral } from './MenuLateral';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex">
      <MenuLateral />
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/detalle/:id" element={<Detalles />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
