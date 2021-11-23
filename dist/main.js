$('#search-btn').on('click', function () {
    let input = $('input').val()
    if (input != '') {
        $.get(`/sanity/${input}`, function (recipesArr) {
            render(recipesArr);
        })
    }
    else {
        $('#results p').css('display', 'block')
    }
})