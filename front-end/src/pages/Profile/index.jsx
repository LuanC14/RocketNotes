import { Container, Form, Avatar } from "./styles"

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function Profile() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }
        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    async function handleAvatarChange(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <button onClick={() => navigate("/")} >
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="" />

                    <label htmlFor="Avatar">
                        <FiCamera />
                        <input id="Avatar" type="file" onChange={handleAvatarChange} />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome" type="text"
                    icon={FiUser} value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="Email"
                    type="text" icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />
            </Form>

        </Container>
    )
}