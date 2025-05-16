import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import { MenuDropLogin } from "../Componentes/MenuDropLogin"

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

    const handleBack = () => {
        navigate('/')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <MenuDropLogin position={position} setPosition={setPosition}/>
                <button type="submit">Entrar</button>
            </form>
            <button onClick={handleBack}>Fazer novo Cadastro</button>
        </div>
        
    )
}