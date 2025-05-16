import React, { useState } from "react";
import { MenuDropCadastro } from "../Componentes/MenuDropCadastro";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        
        fetch('https://681b999317018fe5057c26f6.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({username, password, position}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar feedback');
                }
                return response.json();
            })
            .then((data) => {
                setMsg('Usuário cadastrado com sucesso!');
                setUsername('');
                setPassword('');
                console.log(username, password, position)
            })
            .catch((error) => {
                console.error('Erro ao cadastrar:', error);
                setMsg('Erro ao criar o cadastro.');
            });
        
            if(position === "cidadao"){
                navigate('/home')
            }else{
                alert("Escolha uma opção válida")
            }
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <MenuDropCadastro position={position} setPosition={setPosition}/>
            <button className="btn-cadastro">Enviar</button>
        </form>
    )
}