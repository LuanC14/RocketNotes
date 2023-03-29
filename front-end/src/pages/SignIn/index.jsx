import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input/index'
import { Button } from '../../components/Button/index'
import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar seus links úteis</p>

                <h2>Faça seu Login</h2>

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={event => setEmail(event.target.value)}>
                </Input>

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={event => setPassword(event.target.value)}
                >
                </Input>

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar conta</Link>

            </Form>

            <Background />

        </Container>
    )
}