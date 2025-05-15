import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

export const Prefeitura = () => {

    const [results, setFeedbacks] = useState([])
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('')
    const [id, setId] = useState('')


    // useEffect(() => {

    //     fetch('https://681b999317018fe5057c26f6.mockapi.io/api/v1/feedbacks', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type' : 'application/json'
    //         },
    //         body: JSON.stringify({results})
    //     })
    //         .then((response) => {
    //             if(!response.ok){
    //                 throw new Error('Erro na requisição')
    //             }
    //             return response.json()
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setFeedbacks(data)
    //         })
    //         .catch((error) => {
    //             console.error('Erro ao buscar requisições: ', error)
    //             setError(error.message)
    //         })
    // }, [])

    useEffect(() => {
        fetch('https://681b999317018fe5057c26f6.mockapi.io/api/v1/feedbacks')
            .then((response) => {
                if(!response.ok){
                    throw new Error('Erro na requisição')
                }

                return response.json()
            })
            .then((data) => {
                console.log(data); // Verifique a estrutura dos dados
                setFeedbacks(data);
            })
            .catch((error) => {
                console.error('Erro ao buscar requisições: ',error)
                setError(error.message)
            })
    }, [])

    const handleDelete = async(e) => {
        e.preventDefault()

        fetch(`https://681b999317018fe5057c26f6.mockapi.io/api/v1/feedbacks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((response) => {
                if(!response.ok){
                    throw new Error('Erro ao deletar feedback')
                }
                
                return response.json()
            })
            .then((data) => {
                setMsg('Feedback excluído com sucesso!')
                setFeedbacks((prevFeedbacks) => prevFeedbacks.filter(feedback=> feedback.id.toString() !== id))
                setId('')
            })
            .catch((error) => {
                console.error('Erro ao excluir feedback: ', error)
                setMsg('Erro ao enviar feedback.')
            })
    }
    return(
        <div>
            <h1>Feedback/Denúncia</h1>

            {/* lista API */}

            <h2>Lista de Feedbacks</h2>
            <ul>
                {results.length > 0 ? (
                    results.map((result) => (
                        <li key={result.id}>
                            <strong>ID:</strong> {result.id}<br />
                            <strong>Local:</strong> {result.local}<br />
                            <strong>Usuário:</strong> {result.username}<br />
                            <strong>Feedback:</strong> {result.feedback}
                            <br /><br />
                        </li>
                    ))
                ) : (
                    <p>Nenhum feedback encontrado.</p>
                )}
            </ul>

            <form onSubmit={handleDelete}>
                <label htmlFor="id">Id do feedback/denúncia</label>
                <input type="text" placeholder="Ex: 3" value={id} onChange={(e) => setId(e.target.value)} id="id-delete"/>
                <button className="btn-excluir" type="submit">Excluir</button>
                <p>{msg}</p>
            </form>
        </div>
    )
}