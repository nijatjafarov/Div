var name = 'abyssinian'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cats?name=' + name,
    headers: { 'X-Api-Key': 'B4jIrOnzOMm879+t5tQWqA==hCNxAljf4BeCis8r'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
