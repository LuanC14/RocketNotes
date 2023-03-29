const knex = require("../database/knex/index")

class NotesController {
    async create(request, response) {
        const { title, description, tags, links } = request.body
        const  user_id  = request.user.id

        const [note_id] = await knex("notes").insert({
            title, description, user_id
        })

        const linksInsert = links.map(link => {
            return {
                note_id,
                url: link
            }
        })

        await knex("links").insert(linksInsert)

        const tagsInsert = tags.map(tag => {
            return {
                name: tag,
                note_id,
                user_id,
            }
        })

        await knex("tags").insert(tagsInsert)

        response.send("Tabela criada com sucesso")
    }

    async show(request, response) {
        const { note_id } = request.params
        const note = await knex("notes").where({ id: note_id }).first()
        const tags = await knex("tags").where({ note_id }).orderBy("name")
        const links = await knex("links").where({ note_id }).orderBy("url")

        return response.json({
            ...note, tags, links
        })
    }

    async delete(request, response) {
        const { note_id } = request.params

        await knex("notes").where({ id: note_id }).delete()

        return response.send(`Objeto de ID ${note_id} foi deletado com sucesso`)
    }

    async index(request, response) {
        const { title, tags } = request.query
        const user_id = request.user.id

        let notes

        if (tags) {
            const filterTags = tags.split(",").map(tag => tag.trim())

            notes = await knex("tags")
            .select([
                    "notes.title",
                    "notes.description",
                    "notes.id",
                    "notes.user_id",
                ])
                .where("notes.user_id", user_id)
                .whereLike("notes.title", `%${title}%`)
                .whereIn("name", filterTags)
                .innerJoin("notes","notes.id","tags.note_id")
                .groupBy("notes.title")
                .orderBy("notes.id")
        } else {

            notes = await knex("notes")
                .where({ user_id }).orderBy("title")
                .whereLike("title", `%${title}%`)
        }

        const userTags = await knex("tags").where({user_id})
        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id)

            return {
                ...note,
                tags: noteTags
            }
        })



        response.json(notesWithTags)
    }
}

module.exports = NotesController