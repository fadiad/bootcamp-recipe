const express = require('express')
const router = express.Router()
const urllib = require('urllib')


let recipesArr = []
class Recipes {
    constructor(recipes) {
        this.ingredients = recipes.ingredients
        this.title = recipes.title
        this.thumbnail = recipes.thumbnail
        this.href = recipes.href
    }
}

router.get('/sanity/:ingredient', function (req, res) {
    recipesArr = []
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`, function (err, data, respons) {
        let recipes = JSON.parse(data).results
        for (let recipe of recipes) {
            recipesArr.push(new Recipes(recipe))
        }
        res.send(recipesArr)
    })
})

module.exports = router
