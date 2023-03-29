require("express-async-errors")

const express = require("express")
const routes = require('./routes')
const cors = require("cors")
const AppError = require("./utils/AppError")
const migrationsRun = require('./database/sqlite/migrations/index')
const uploadConfig = require('./configs/upload')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

migrationsRun()

app.use((error, request, response, next) => {
    if(error instanceof AppError ) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internet Several Error"
    })
})

app.listen(3333, () => {
    console.log("HTTP Server is running")
})