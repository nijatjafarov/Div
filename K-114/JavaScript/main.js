var ad;

// while (ad != 'dayan') {
//     ad = prompt('Adınızı daxil edin')
//     console.log(`Salam, ${ad}`)
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} cüt ədəddir`)
//     } else {
//         console.log(`${i} tək ədəddir`)
//     }
// }

var body = document.querySelector('body')

for (let i = 1; i <= 8; i++) {
    var kub = document.createElement('div')
    kub.style.width = '300px'
    kub.style.height = '300px'
    kub.style.margin = '20px'
    kub.style.display = 'inline-block'

    body.appendChild(kub)
}

var interval = setInterval(function() {
    var kublar = document.querySelectorAll('div')
    for (let i = 0; i < kublar.length; i++) {
        kublar[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    }
}, 500)

function bashlat() {
    interval = setInterval(function() {
        var kublar = document.querySelectorAll('div')
        for (let i = 0; i < kublar.length; i++) {
            kublar[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
        }
    }, 500)
}

function dayandir() {
    clearInterval(interval)
}

var reng = document.querySelector('input')

reng.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        body.style.backgroundColor = reng.value
    }
})