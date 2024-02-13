import { useState } from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Usuário Cadastrado')
        console.log(`O usuário ${name} foi cadastrado com  a senha ${password}.`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return(
        <div>
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="Name">Nome: </label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder="Digite seu Nome."
                        onChange= {(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="text" 
                        id='password'
                        name='password' 
                        placeholder="Digite sua Senha."
                        onChange= {(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>

        </div>
    )
}
export default Form