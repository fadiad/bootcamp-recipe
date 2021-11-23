
function render(recipesArr) {
    $('#results').empty()
    const source = $('#recipes-template').html()
    const template = Handlebars.compile(source)
    let newHtml = template({ recipes: recipesArr })
    $('#results').append(newHtml)
}