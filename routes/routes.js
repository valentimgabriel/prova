const express = require("express")
const controller = require("../controllers/controller")

const routes = express.Router()

routes.get("/",controller.getAll)
routes.get("/:id",controller.getById)
routes.post("/",controller.createPessoa)
routes.put("/:id",controller.putPessoa)
routes.delete("/:id", controller.deletePessoa)

module.exports = routes