const AppError = require("../utils/AppError")
const { hash } = require("bcryptjs")

class CreateUserService {

    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute({name, email, password}) {

        const checkUsersExists = await this.userRepository.findByEmail(email)

        if (checkUsersExists) {
            throw new AppError("Este e-mail já está em uso")
        }

        const hashedPasswowrd = await hash(password, 8)

        await this.userRepository.create(name, email, hashedPasswowrd)
    }
}

module.exports = CreateUserService