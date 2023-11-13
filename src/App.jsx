import './App.css'

import { BrowserRouter , Routes , Route } from 'react-router-dom'

import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'
import { Superior } from './components/Superior/Superior'

import { Buscar } from './components/Buscar/Buscar'
import { Biblioteca } from './components/Biblioteca/Biblioteca'
import { Playlist } from './components/Playlist/Playlist'



function App() {

  return (
    <BrowserRouter>
      <div className="Spotify">
      <Header />
      
      <div className='Contenido'>
        <Superior />
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/buscar' element={ <Buscar />  }/>
          <Route path='/biblioteca' element={ <Biblioteca /> } />
          <Route path='/playlist/:id' element={ <Playlist /> } /> 
        </Routes>
      </div>

      </div>
    </BrowserRouter>
    
  )
}

export default App
