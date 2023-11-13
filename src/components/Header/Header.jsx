import './Header.css'

import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { spotify } from '../../bbdd'
const { header } = spotify
const { h1, menu , legal } = header


export const Header = ( ) =>{

    // const [ header , setHeader ] = useState()
    // //FETCH AL CONTENIDO DEL MAIN
    // useEffect( () => {
    //     let controller = new AbortController()
    //     let options = {
    //         method: "get",
    //         signal: controller.signal,
    //         headers: {
    //             "Content-type" : "application/json"
    //         }
    //     }
    //     fetch('https://api-spotify-ashy.vercel.app/header' , options)
    //     .then( res => res.json())
    //     .then( data => setHeader( data.spotifyData))
    //     .catch( err => console.log( err ))
    //     .finally( () => controller.abort() )
    // } , [])
    
    // const { h1, menu , legal } = header
    // console.log( h1 , menu , legal)
    return (
        <div className='Header'>
            <div className='Header-row'>
                <h1 className='Header-h1'>
                    <NavLink to={ h1.href } className='Header-a'>
                        <img src={ h1.src } alt={ h1.alt } className='Header-svg'/>
                    </NavLink>
                </h1>
                <nav className='Header-nav'>
                    <ul className='Header-ul'>
                        { menu.map( ({id , href , icono , texto}) => 
                            <li key={id}className='Header-li'>
                                <NavLink to={ href } className='Header-link'>
                                    <img src={ icono} alt={texto} className='Header-icon'/>
                                    <span className='Header-span'>{texto}</span>
                                </NavLink>
                            </li>
                         ) }
                        
                    </ul>
                </nav>
            </div>
            <div className='Header-row'>
                <ul className='Header-legales' >
                    { legal.map( ({id , href , title , texto}) => 
                        <li key={id} className='Header-legal'>
                            <a className='Header-a' href={href} title={title}> {texto} </a>
                        </li>
                     ) }
                    
                </ul>
                <div className='Header-idioma'>
                    <img src='./assets/idiomas.svg' alt='icono idiomas' className='Idiomas-icon'/>
                    <span className='Idiomas-span'>Español de España</span>
                </div>
            </div>
        </div>
    )
}