import { useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import axios from 'axios';
import { useState } from "react";

export const Home = () => {

    const navigate = useNavigate()
    const {user, logout} = useAuth()
    const [userFeed, setUserFeed] = useState('')
    const [feedback, setFeedback] = useState('')
    const [local, setLocal] = useState('')
    const [msg, setMsg] = useState('')
    const username = user?.username


    const handleBack = () => {
        navigate('/login')
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        fetch('https://681b999317018fe5057c26f6.mockapi.io/api/v1/feedbacks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({feedback, local, username}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar feedback');
                }
                return response.json();
            })
            .then((data) => {
                setMsg('Feedback enviado com sucesso!');
                setFeedback('');
                setLocal('');
                console.log(feedback, local, username)
            })
            .catch((error) => {
                console.error('Erro ao enviar feedback:', error);
                setMsg('Erro ao enviar feedback.');
            });

    }

    

    return(
        <div>
            <h1 className="title-home-cid">Bem vindo, {username}</h1> {/* '?' pode ter ou nao ter user */}
            <h3 className="subtitle-home-cid">Comece a sua denuncia ou feedback</h3>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="descricao">Feedback/Denúncia</label>
                <textarea name="" id="" placeholder="Ex: Rua fulano da silva precisa de asfalto" onChange={(e) => setFeedback(e.target.value)} value={feedback}/>
                
                <label htmlFor="local">Local</label>
                <input type="text" placeholder="Ex: Kobrasol" onChange={(e) => setLocal(e.target.value)} value={local}/>

                <button className="btn-feedback">Enviar comentário</button>
            </form>
            
            
            {msg && <p>{msg}</p>}
            
            
            <button onClick={handleBack}>Logout</button>
        </div>
    )
}