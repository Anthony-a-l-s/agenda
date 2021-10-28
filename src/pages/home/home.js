import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import More from '../../images/more.svg'
import './home.css'
import axios from 'axios'


function Home() {

    
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/list_posts')
        .then((response) => {
          setPosts(response.data)
          
        })
        .catch(() => {

            console.log('DEU ERRADO!!')
            
        })
        
        
    },[])

    function deletePost(id) {
        axios.delete(`http://localhost:4000/delete_post/${id}`)

        setPosts(posts.filter(post => post.id !== id))
    }
   

  

    return(
        
        <div>
                
                <HeaderMain/>

                <main>
                    
                    <div className='cards'>
                           
                      {posts.map((post, key) => {
                            
                            return(
                                <div className='card' key={key}> 
                         
                                        <header>
                                            <h2>{post.nome}</h2>
                                            <img src={More}/>
                                        </header>
                                           
                                        <div className='line'></div>
                                         
                                        <p>Idade: {post.idade}</p>
                                        <p>Gênero: {post.genero}</p>
                                        <p>telefone: ( {post.telefones[0].ddd} ) {post.telefones[0].numero_tel}</p>
                                        

                                        <div className='btns'>

                                            <div className='btn-edit'>
                                                <Link to={{pathname: `/edit/${post.id}` }} > 
                                                    <button>Editar</button>
                                                </Link>
                                    
                                            </div>

                                            <div className='btn-readmore'>
                                                <Link to={{pathname: `/lerMais/${post.id}` }} >                  
                                                    <button>Ler mais</button>
                                                </Link>
                                            </div>

                                            <div className='btn-delete'>
                                                <button onClick={() => deletePost(post.id) } >Excluir</button>
                                            </div>

                                        </div>

                                </div>
                            )
                         })}
                        
                        


                    </div>

                </main>

        </div>
    )

    
}

export default Home