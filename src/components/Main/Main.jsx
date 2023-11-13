import './Main.css'

import { NavLink } from 'react-router-dom'

import { spotify } from '../../bbdd'
const { main } = spotify


export const Main = ( ) => {
    return( 
    <div className='Main'>
        {main.map(  (eachCarrusel ) =>
            <Carrusel  key={eachCarrusel.id} { ...eachCarrusel }/>
        )}
    </div>
    )
}

const Carrusel = ( { titulo , listas } )=>{
    return( 
        <div className='Carrusel-wrapper'>
            <h2 className='Carrusel-h2'> { titulo } </h2>
            <div className='Carrusel-grid'>
                {  listas.map( ( eachLista ) => 
                    <Playlist key={ eachLista.id } { ...eachLista } />
                )}
            </div>
        </div>

    )
}

const Playlist = ( { id , titulo, img , parrafo , a }) =>{
    return( 
        <div className='Playlist'>
            <NavLink to={ `/playlist/${ id }` } title={ a.title } className="Playlist-mask">
                <img src={ img.src } alt={ img.alt } className="Playlist-img" />
                <div className="Playlist-play">
                    <img className='Playlist-play-svg' src='/assets/image_(22).svg'/>
                </div>
            </NavLink>
            <h2 className="Playlist-h2">{ titulo }</h2>
            <p className="Playlist-p">{ parrafo }</p>
        </div>
    )
}