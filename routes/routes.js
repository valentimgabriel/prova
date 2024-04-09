const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()

routes.get("/",controller.getAll)
routes.get("/:id",controller.getPessoaById)



module.exports = routes