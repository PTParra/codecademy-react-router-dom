import { createRoot } from 'react-dom/client'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { LayoutComponent } from './components/layoutComponent'
import { ItemPage } from './pages/itemPage'
import { PokemonPage } from './pages/pokemonPage'
import { HomePage } from './pages/HomePage'
import { PokemonDetailPage } from './pages/pokemonDetailPage'
import './main.css';
import { MovesPage } from './pages/movesPage'
import { MoveDetailPage } from './pages/moveDetailPage'
import { ItemDetailPage } from './pages/itemDetailPage'


/*
  Practica de React-router-dom, no es la de codecademy pero es para practicar el router dom
*/

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemons/:page' element={<PokemonPage />} />
        <Route path='/pokemon/:id' element={<PokemonDetailPage />} />
        <Route path='/moves/:page' element={<MovesPage />} />
        <Route path='/move/:id' element={<MoveDetailPage />} />
        <Route path='/items/:page' element={<ItemPage />} />
        <Route path='/item/:id' element={<ItemDetailPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
