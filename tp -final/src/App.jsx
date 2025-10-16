import './App.css';
import { PokemonList } from './pokemonlist';
import { Detalles } from './detalles';
import { Home } from './Home';
import { Topbar } from './Topbar';
import { Footer } from './Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/detalle/:id" element={<Detalles />} />
        </Routes>
      </main>
      <Footer/>`{`Una pokeapp muy divertido con proximas actualizaciones`}`
    </div>
  );
}

export default App;
