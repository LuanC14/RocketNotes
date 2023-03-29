import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input/index'
import { Button } from '../../components/Button/index'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from '../../services/api'

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSingUp = function (e) {
        e.preventDefault()

        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar o usuário")
                }
            })
    }

    return (
        <Container>

            <Background />


            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}></Input>

                <Input
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}>
                </Input>

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}>
                </Input>

                <Button title="Cadastrar" onClick={handleSingUp} />

                <Link to="/">Voltar para o Login</Link>

            </Form>


        </Container>
    )
}