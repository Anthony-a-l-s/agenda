import React,{ useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useHistory, useParams } from 'react-router-dom'

import axios from 'axios'

const validationCadastro = yup.object().shape({
    nome: yup.string().required('Campo obrigatório'),
    idade: yup.number().required('Campo obrigatório'),
    genero: yup.string().required('Campo obrigatório'),
    
   
})


function Edit(){

    const { id } = useParams()

    let history = useHistory()

    const{ register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationCadastro)
    })

    useEffect(() => {
        axios.get(`http://localhost:4000/show_post/${id}`)
        .then(() => {
          
          
        })
     
        
    },[])

    

    const addCadastro = data => axios.patch(`http://localhost:4000/update_post/${id}`, data)
    .then(() => {
         console.log('Deu tudo certo')
         history.push("/")
         
    })
    .catch(() =>{
        console.log('DEU ERRADO!')
    })
    
   


    return(
        <div>
            <Header/>

            <main>

                <div className='card-post' >

                    <h1>Editar cadastro</h1>
                    <div className='line-post'></div>
    
                    <div clasName='card-body-post'>

                        <form onSubmit={handleSubmit(addCadastro)}>

                            <div className='fields'>
                                <label>Nome</label>
                                <input type='text' name='nome'{...register('nome')} />
                                <p className='error-message'>{errors.nome?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Idade</label>
                                <input type='text' name='idade'{...register('idade')} />
                                <p className='error-message'>{errors.idade?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Gênero</label>
                                <input type='text' name='genero'{...register('genero')} />
                                <p className='error-message'>{errors.genero?.message}</p>
                            </div>
                            
                            <h2 className ='texto'>Endereço</h2>
                            <div className='line-post'></div>

                            <div className='fields'>
                                <label>Logradouro</label>
                                <input type='text' name='logradouro'{...register('logradouro')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Número</label>
                                <input type='text' name='numero_casa'{...register('numero_casa')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Complemento</label>
                                <input type='text' name='complemento'{...register('complemento')} />
                                
                            </div>

                            <div className='fields'>
                                <label>CEP</label>
                                <input type='text' name='cep'{...register('cep')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Bairro</label>
                                <input type='text' name='bairro'{...register('bairro')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Cidade</label>
                                <input type='text' name='cidade'{...register('cidade')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Estado(sigla)</label>
                                <input type='text' name='estado'{...register('estado')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <h2 className ='texto'>Telefone</h2>
                            <div className='line-post'></div>

                            <div className='fields'>
                                <label>DDD</label>
                                <input type='text' name='ddd'{...register('ddd')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Número</label>
                                <input type='text' name='numero_tel'{...register('numero_tel')} />
                                <p className='error-message'>{errors.logradouro?.message}</p>
                            </div>


                            <div className='btn-cadastro'>
                                <button type='submit'>Editar</button>
                            </div>

                        </form>
                    </div>


                </div>

            </main>

        </div>
    )
}

export default Edit