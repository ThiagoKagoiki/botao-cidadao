import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

export const Prefeitura = () => {

    const [results, setFeedbacks] = useState([])

    useEffect(() => {
        fetch('https://681b999317018fe5057c26f6.mockapi.io/api/v1/feedbacks')
            .then((response) => {
                if(!response.ok){
                    throw new Error('Erro na requisição')
                }

                return response.json()
            })
            .then((data) => setFeedbacks(data))
            .catch((error) => console.error('Erro ao buscar requisições: '))
    }, [])
    return(
        <div>
            <h1>Feedback/Denúncia</h1>

            {/* lista API */}

            <h2>Lista de Feedbacks</h2>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>
                    <strong>{result.id}</strong><br />
                    <strong>{result.local}:</strong> {result.feedback}
                    <br /><br />
                    </li>
                ))}
            </ul>

            <form action="">
                <label htmlFor="">Id do feedback/denúncia</label>
                <input type="text" placeholder="Ex: 3"/>
                <button className="btn-excluir">Excluir</button>
            </form>
        </div>
    )
}