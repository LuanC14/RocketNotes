import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from '../../components/ButtonText/'

import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const [title, setTitle] = useState("")

    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(removed) {
        setLinks(prevState => prevState.filter(link => link !== removed))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(removed) {
        setTags(prevState => prevState.filter(tag => tag !== removed))
    }

    async function handleCreateNote() {
        if (!title) {
            return alert("Você precisa adicionar um título.")
        }

        if(links.length === 0) {
            return alert("Você precisa adicionar pelo menos um link")
        }

        if(tags.length === 0) {
            return alert("Você precisa adicionar pelo menos um tag")
        }

        if (newLink) {
            return alert("Você preencheu o campo de novo Link, porém não concluiu a operação de adição, clique no botão adicionar para terminar de adicionar o novo Link.")
        }

        if (newTag) {
            return alert("Você preencheu o campo de nova Tag, porém não concluiu a operação de adição, clique no botão adicionar para terminar de adicionar a nova Tag.")
        }

        await api.post("/notes", {
            title,
            description,
            links,
            tags
        }).then(() => {
            alert("Nota criada com sucesso!")
            navigate("/")
        })
    }


    return (
        <Container>
            <Header />
            <main className="main-scroll">
                <Form>

                    <header>
                        <h1>Criar Nota</h1>
                        <ButtonText title="Voltar" onClick={() => navigate(-1)} />
                    </header>

                    <Input
                        placeholder="Título"
                        onChange={event => setTitle(event.target.value)}
                    />

                    <TextArea
                        placeholder="Observações"
                        onChange={event => setDescription(event.target.value)}
                    />

                    <Section title="Links úteis">

                        {
                            links.map((link, index) => (
                                <NoteItem
                                    onClick={() => handleRemoveLink(link)}
                                    value={link}
                                    key={String(index)}
                                />
                            ))
                        }

                        <NoteItem
                            isNew
                            onClick={handleAddLink}
                            onChange={event => setNewLink(event.target.value)}
                            value={newLink}
                            placeholder="Novo Link"
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">

                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem
                                isNew={true}
                                placeholder="Nova Tag"
                                onChange={event => setNewTag(event.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button
                        title="Salvar"
                        onClick={handleCreateNote}
                    />

                </Form>
            </main>
        </Container>
    )
}