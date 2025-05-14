
import { useAuth } from "../Hooks/useAuth"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const {user} = useAuth()

    return user ? children: <Navigate to={"/login"}/>
}