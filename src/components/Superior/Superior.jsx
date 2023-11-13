import './Superior.css'

import { spotify } from '../../bbdd'
const { superior } = spotify
const { premium , session } = superior


export const Superior = () =>{
    return(
        <>
        <div className='Superior'>
            <div className='Superior-flechas'>
                <img className='Superior-svg' src='/assets/image_(4).svg'/>
                <img className='Superior-svg' src='/assets/image_(5).svg' />
            </div>
            <div className='Superior-menus' >
                <div className='Superior-premium'>
                    <ul className='Premium-ul'>
                        { premium.map( (eachPremium) => 
                            <li key={ eachPremium.id } className=' Premium-li'><a href={ eachPremium.href } alt=''> { eachPremium.texto } </a></li>
                        )}
                    </ul>
                </div>
                <div className='Superior-registro'>
                    <ul className='Registro-ul'>
                        { session.map( (eachSession) =>
                            <li key={ eachSession.id } className='Registro-li'><a href={ eachSession.href } alt=''> { eachSession.texto } </a></li>
                        )}
                        
                    </ul>
                </div>
            </div>
            
        </div>
        <div className='Superior-mobile'>
            <img src='./assets/logo.svg' alt='logo Spotify' className='Mobile-img'/>
            <img src='./assets/buscar.svg' alt='logo buscar' className='Mobile-svg'/>
            <span className='Mobile-span' >abrir la aplicacion</span>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className='Mobile-svg' viewBox="0 0 16 16">
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
        </div>
        </>
    )
}