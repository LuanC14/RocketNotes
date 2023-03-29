import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })

            const { user, token } = response.data

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['Authorization'] = `bearer ${token}`

            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o login.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")
        setData({})
    }

    async function updateProfile({ user, avatarFile }) {
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)

                user.avatar = response.data.user.avatar // Esse user.avatar é referente ao parâmetro
            }

            await api.put("/users", user)

            const userWithoutPasswords = {
                password: undefined, old_password: undefined
            }

            const safeUser = Object.assign(user, userWithoutPasswords)

            localStorage.setItem("@rocketnotes:user", JSON.stringify(safeUser))

            setData({ user: safeUser, token: data.token })

            alert("Perfil atualizado com sucesso!")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível atualizar os dados.")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, updateProfile , user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
