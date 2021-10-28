import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(){
    return(

        <header>
            
            <div className='container'>

                <div className='btnVoltar'>
                    
                    <Link to='/'>

                        <button>voltar</button>  

                    </Link>

                </div>
                
            </div>
               
            
        </header>
    )
}

export default Header