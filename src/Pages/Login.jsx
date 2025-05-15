import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import { MenuDrop } from "../Componentes/MenuDrop"

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault() //impede que a pagina recarregue
        
        const success = await login(username, password, position);
        
        if(success && position === 'prefeitura'){
            navigate('/prefeitura')
        }else if(success && position === 'cidadao'){
            navigate('/home')
        }else{
            alert("Usuário ou senha inválidos")
        }
        
        // console.log(userName)
        // console.log(password)
        console.log('position: ', position)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <MenuDrop position={position} setPosition={setPosition}/>
            <button type="submit">Entrar</button>
        </form>
    )
}