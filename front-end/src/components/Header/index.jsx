import { Container, Profile, Logout } from "./styles";

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Header() {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    function handleLogout() {
        signOut()
        navigate("/")
    }

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="Foto de perfil" />
                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleLogout}>
                <RiShutDownLine />
            </Logout>

        </Container>

    )
}