const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get("/admin/recipes", recipes.index) // Mostrar a lista de receitas

// Mostrar formulário de nova receita
routes.get("/admin/recipes/create", recipes.create)

// Exibir detalhes de uma receita
routes.get("/admin/recipes/:id", recipes.show) 

//routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)

routes.put("/admin/recipes", recipes.put)

routes.delete("/admin/recipes", recipes.delete)

module.exports = routes