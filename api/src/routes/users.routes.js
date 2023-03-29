const { Router } = require('express')
const multer = require('multer')

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require("../middlewares/EnsureAuthenticated")
const uploadConfig = require("../configs/upload")

const userRoutes = Router()
const usersControllers = new UsersController()
const userAvatarController = new UserAvatarController()
const upload = multer(uploadConfig.MULTER)

userRoutes.post("/", usersControllers.create)
userRoutes.put("/", ensureAuthenticated, usersControllers.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes