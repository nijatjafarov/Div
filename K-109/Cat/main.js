//change the limit to however many images to use
const url = "https://meowfacts.herokuapp.com/?count=5";

fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
    console.log(data['data']);
    var body = document.querySelector('body');
    for (let i = 0; i < data['data'].length; i++) {
        var h1 = document.createElement('h1');
        h1.innerHTML = data['data'][i];
        body.appendChild(h1);
    }
})
.catch(function(error) {
   console.log(error);
});