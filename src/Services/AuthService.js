import axios from 'axios'

const API_URL = 'https://681b999317018fe5057c26f6.mockapi.io/users';

export const loginRequest = async (username, password, position) => {
    try{
        const response = await axios.get(API_URL)
        const users = response.data

        const user = users.find((user) => user.username === username && user.password === password && user.position === position)

        return user ? {success: true, user} : {success: false}     
    }catch{
        console.error("Erro na autenticação", error)
        return {success: false}
    }
}