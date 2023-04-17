const UserRepository = require("../repositories/UserRepository")
const CreateUserService = require("../services/CreateUserService")
const UpdateUserService = require("../services/UpdateUserService")

class UsersController {
    async create(request, response) {
        
        const { name, email, password } = request.body

        const userRepository = new UserRepository()
        const createUserService = new CreateUserService(userRepository)

        createUserService.execute({name, email, password})

        return response.status(201).send("Usuário inserido com sucesso")
    }

    async update(request, response) {

        const { name, email, password, old_password } = request.body
        const user_id = request.user.id

        const userRepository = new UserRepository()
        const updateUserService = new UpdateUserService(userRepository)
        
        await updateUserService.execute({name, email, password, old_password, user_id})
       
        return response.send("Dados alterados com sucesso")
    }
}

module.exports = UsersController