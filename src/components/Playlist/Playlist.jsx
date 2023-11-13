import './Playlist.css'

import { useParams } from 'react-router-dom'
import { todasPlaylist } from '../../bbdd'


import { useEffect } from 'react'
import { useState } from 'react'


export const Playlist =() => {
    
    const { id } = useParams()

    const [ playlist , setPlaylist ] = useState( {} )

    useEffect( ()=> {
        let buscar = todasPlaylist.find( eachPlaylist => eachPlaylist.id == id )
        setPlaylist( buscar )


    } , [] )

    return( 

        <div className='ListInt'>
            <div className='ListInt-wrapper'>
                <img className='ListInt-img' src={ todasPlaylist[id].img.src } alt={ todasPlaylist[id].img.alt }/>
                <div className='ListInt-content'>
                    <p className='ListInt-p lista'>LISTA</p>
                    <h2 className='ListInt-h2'>{ todasPlaylist[id].titulo }</h2>
                    <p className='ListInt-p parrafo'>{ todasPlaylist[id].parrafo }</p>   

                </div>
            </div>
            <div className='SongsList'>
                
            </div>
               
        </div>
    )
}