import { Container, Links, Content } from './styles'

import { Button } from '../../components/Button/index'
import { Header } from '../../components/Header/index'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Details() {
    const [data, setData] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    function handleDeleteNote() {
        const confirm = window.confirm("Você tem certeza que deseja excluir a nota?")

        if (confirm) {
            api.delete(`/notes/${params.id}`)
                .then(navigate(-1))
        }
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }
        fetchNotes()
    }, [])

    return (
        <Container>

            <Header />

            {data &&
                <main>
                    <Content>
                        <ButtonText title="Excluir nota" onClick={handleDeleteNote} />

                        <h1>
                            {data.title}
                        </h1>

                        <p>
                            {data.description}
                        </p>

                        {data.links &&
                            <Section title="Links uteis">
                                <Links>
                                    {
                                        data.links.map(link => (
                                            <li key={link.id}>
                                                <a target='_blank' href={link.url}>
                                                    {link.url}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </Links>
                            </Section>
                        }

                        {data.tags &&
                            <Section title="Marcadores">
                                {
                                    data.tags.map(tag => (
                                        <Tag key={tag.id} title={tag.name} />
                                    ))
                                }
                            </Section>
                        }


                        <Button title="Voltar" onClick={() => navigate(-1)} />

                    </Content>
                </main>
            }



        </Container>
    )
}