import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMain.css'

function HeaderMain(){
    return(

        <header>
            <div className='container'> 
                <div className='logo'>

                            <h1>Agenda</h1>
                            
                </div>

                <div className='btnNovoCadastro'>
                    
                    <Link to='/cadastro'>

                        <button>Adicionar novo cadastro</button>

                    </Link>

                </div>
               
            </div>
        </header>
    )
}

export default HeaderMain