import { Container, Menu, Logo, Content, NoteList, CreateNote } from './styles'

import { Header } from '../../components/Header/index'
import { ButtonText } from '../../components/ButtonText/index'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { api } from '../../services/api'
import { Section } from '../../components/Section'

import { FiPlus, FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()

    function handleTagSelected(tagName) {

        if (tagName === "all") {
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tagsSeletecds => tagsSeletecds !== tagName)
            setTagsSelected(filteredTags)

        } else {
            setTagsSelected(prevState => [...prevState, tagName])

        }
    }

    function handleClickNote(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {

        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()

    }, [tagsSelected, search])

    return (
        <Container>

            <Menu>
                <Logo>
                    <h1>Rocketnotes</h1>
                </Logo>

                <ul>
                    <li>
                        <ButtonText
                            title="Todos"
                            onClick={() => handleTagSelected("all")}
                            isActive={tagsSelected.length === 0}
                        />
                    </li>

                    {
                        tags && tags.map((tag) =>
                        (
                            <li key={String(tag.id)}>
                                <ButtonText
                                    title={tag.name}
                                    onClick={() => { handleTagSelected(tag.name) }}
                                    isActive={tagsSelected.includes(tag.name)}
                                />
                            </li>
                        )

                        )
                    }

                </ul>

                <CreateNote to="/new" >
                    <FiPlus />
                    Criar Nota
                </CreateNote>
            </Menu>

            <Content>

                <Header />

                <main>

                    <Input
                        placeholder="Pesquisar pelo título"
                        icon={FiSearch}
                        onChange={event => setSearch(event.target.value)}
                    />

                    <Section title="Minhas notas">
                        <NoteList>
                            {
                                notes.map((note) => (
                                    <Note
                                        key={note.id}
                                        data={note}
                                        onClick={() => handleClickNote(note.id)}
                                    />
                                ))
                            }

                        </NoteList>
                    </Section>

                </main>


            </Content>

        </Container>


    )
}