import { useContext } from "react"
import { AuthContex } from "./AuthContext"

export const useAuthContext = () => {
    return useContext(AuthContex)
};