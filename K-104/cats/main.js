var search = document.querySelector('#search')
var name
search.addEventListener('keydown', function(event){
    if (event.key == 'Enter') {
        name = search.value
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
            headers: { 'X-Api-Key': 'B4jIrOnzOMm879+t5tQWqA==hCNxAljf4BeCis8r'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                document.querySelector('#cat-photo').src = result[0]['image_link']
                document.querySelector('#cat-name').innerHTML = result[0]['name']
                document.querySelector('#cat-origin').innerHTML = result[0]['origin']
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
})
