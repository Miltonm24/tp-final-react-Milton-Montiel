import './App.css'
import { PokemonList } from './pokemonlist'
import { Detalles } from './detalles'
import { Home } from './Home' 
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/detalle/:id" element={<Detalles />} />
      </Routes>
    </>
  )
}

export default App
