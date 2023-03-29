const { Router } = require("express")

const TagsController = require('../controllers/TagsController')
const ensureAuthenticated = require("../middlewares/EnsureAuthenticated")

const TagsRoutes = Router()
const tagsController = new TagsController()

TagsRoutes.get("/", ensureAuthenticated, tagsController.index)

module.exports = TagsRoutes

