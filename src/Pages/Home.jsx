import { useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import axios from 'axios';
import { useState } from "react";

export const Home = () => {

    const navigate = useNavigate()
    const {user, logout} = useAuth()

    const [desc, setDesc] = useState('')
    const [loc, setLoc] = useState('')
    const [msg, setMsg] = useState('')


    const handleBack = () => {
        navigate('/')
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        fetch('https://681b999317018fe5057c26f6.mockapi.io/api/v1/feedbacks', {
            method: 'POST',
            headers: {
                'Conten-type': 'application/json'
            },
            body: JSON.stringify({desc, loc}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar feedback');
                  }
                  return response.json();
            })
            .then((data) => {
                setMsg('Feedback enviado com sucesso!');
                setDesc('');
                setLoc('');
            })
            .catch((error) => {
                console.error('Erro ao enviar feedback:', error);
                setMsg('Erro ao enviar feedback.');
            });

    }

    

    return(
        <div>
            <h1 className="title-home-cid">Bem vindo, {user?.username}</h1> {/* '?' pode ter ou nao ter user */}
            <h3 className="subtitle-home-cid">Comece a sua denuncia ou feedback</h3>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="descricao">Feedback/Denúncia</label>
                <textarea name="" id="" placeholder="Ex: Rua fulano da silva precisa de asfalto" onChange={(e) => setDesc(e.target.value)} value={desc}/>
                
                <label htmlFor="local">Local</label>
                <input type="text" placeholder="Ex: Kobrasol" onChange={(e) => setLoc(e.target.value)} value={loc}/>

                <button className="btn-feedback">Enviar comentário</button>
            </form>
            
            
            {msg && <p>{msg}</p>}
            
            
            <button onClick={handleBack}>Logout</button>
        </div>
    )
}