const { Router } = require('express')

const NotesControllers = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/EnsureAuthenticated")

const noteRoutes = Router()
const notesControllers = new NotesControllers()

noteRoutes.use(ensureAuthenticated)

noteRoutes.get("/",notesControllers.index)
noteRoutes.post("/", notesControllers.create)
noteRoutes.get("/:note_id", notesControllers.show)
noteRoutes.delete("/:note_id",notesControllers.delete)

module.exports = noteRoutes