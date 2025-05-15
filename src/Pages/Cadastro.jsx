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
        
        
        if(position === 'cidadao'){
            navigate('/home')
        }else{
            alert("Usuário já existente ou opção inválida")
        }
        
        // console.log(userName)
        // console.log(password)
        console.log('position: ', position)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <input type="text" placeholder="Usuário"/>
            <input type="text" placeholder="Senha"/>
            <input type="text" placeholder="Confirme sua Senha"/>
            <MenuDropCadastro position={position} setPosition={setPosition}/>
        </form>
    )
}