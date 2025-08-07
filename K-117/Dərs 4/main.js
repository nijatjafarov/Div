// Bu menim ilk kodumdur
// var reng = prompt('Saytin arxa fonu nə rəng olsun?')

// document.body.style.backgroundColor = reng

function responsiveMenuHandler() {
    var responsiveMenu = document.querySelector('#responsive-menu')

    if (responsiveMenu.style.display == 'block') {
        responsiveMenu.style.display = 'none'
    } else {
        responsiveMenu.style.display = 'block'
    }
}

var row = document.createElement('div')
row.className = 'row'

var card = document.createElement('div')
card.className = 'card'
var img = document.createElement('img')
img.src = 'https://alhamdtech.pk/cdn/shop/files/amazon-kindle-11th-gen-ebook-reader-2022-release-741931.png?v=1722252039'
card.appendChild(img)
var h3 = document.createElement('h3')
h3.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, et!'
card.appendChild(h3)
var a = document.createElement('a')
a.innerText = 'Web Design'
card.appendChild(a)
var p = document.createElement('p')
p.innerText = '09 September'
card.appendChild(p)

var responsiveRow = document.createElement('div')
responsiveRow.className = 'responsive-row'
// responsiveRow.appendChild(card)
row.appendChild(responsiveRow)
row.appendChild(responsiveRow)

function addCard() {

    // var cards = document.querySelector('#cards')
    // cards.insertAdjacentElement("afterbegin", row)
}

