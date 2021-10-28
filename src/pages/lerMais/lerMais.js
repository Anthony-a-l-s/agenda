import React,{ useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import '../home/home.css'
import More from '../../images/more.svg'
import axios from 'axios'



function LerMais(){

    const { id } = useParams()

    

    const [record, setRecord] = useState([]) 
    useEffect(() => {
        axios.get(`http://localhost:4000/show_post/${id}`)
        .then((response) => {
          setRecord([response.data])
          
          
        })
        .catch(() => {

            console.log('DEU ERRADO!!')
            
        })
        
        
    },[])




    return(
       
        <div>
                
                <Header/>

                <main>
                    
                    <div className='cards'>
                        
                      {record.map((post,key) => {
                            
                            return(
                                
                                <div className='card' key={key}> 
                                    
                                        <header>
                                        <h2>{post.nome}</h2>
                                            <img src={More}/>
                                        </header>
                                           
                                        <div className='line'></div>

                                        <p>Idade: {post.idade}</p>
                                        <p>Gênero: {post.genero}</p>
                                        <p>Endereço:  {post.endereco.logradouro} {post.endereco.numero_casa} {post.endereco.complemento}</p>
                                        <p>CEP: {post.endereco.cep},    Bairro {post.endereco.bairro}  </p>
                                        <p> {post.endereco.cidade} ({post.endereco.estado}) </p>
                                        <p>telefone: ( {post.telefones[0].ddd} ) {post.telefones[0].numero_tel}</p>
                                         
                                        

                                </div>
                            )
                         })}
                        
                        


                    </div>

                </main>

        </div>

    )
}

export default LerMais