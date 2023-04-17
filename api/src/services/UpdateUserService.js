const AppError = require("../utils/AppError")
const { hash, compare } = require("bcryptjs")

class UpdateUserService {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ name, email, password, old_password, user_id }) {

        const user = await this.userRepository.findById(user_id)

        if (!user) {
            throw new AppError("Usuário não encontrado")
        }

        const userEmailExists = await this.userRepository.findByEmail(email)

        if (userEmailExists && userEmailExists.id !== user.id) {
            throw new AppError("O email já está em uso")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if (password && !old_password) {
            throw new AppError("Você precisa informar senha anterior")
        }

        if (password && old_password) {
            const checkedOldPassowrd = await compare(old_password, user.password)

            if (!checkedOldPassowrd) {
                throw new AppError("Senha incorreta")
            }

            user.password = await hash(password, 8)
        }

        await this.userRepository.update(user, user_id)
    }
}

module.exports = UpdateUserService