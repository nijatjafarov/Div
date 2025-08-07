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
row.appendChild(responsiveRow)
row.appendChild(responsiveRow.cloneNode())

cards.insertAdjacentElement("afterbegin", row)

function addCard() {
    var firstResponsiveRow = row.children[0]
    var secondResponsiveRow = row.children[1]

    if (firstResponsiveRow.children.length < 2) {
        firstResponsiveRow.appendChild(card.cloneNode(true))
    } else if (secondResponsiveRow.children.length < 2) {
        secondResponsiveRow.appendChild(card.cloneNode(true))
    } else {
        row = row.cloneNode()

        firstResponsiveRow = responsiveRow.cloneNode()
        secondResponsiveRow = responsiveRow.cloneNode()

        firstResponsiveRow.appendChild(card.cloneNode(true))
        row.appendChild(firstResponsiveRow)
        row.appendChild(secondResponsiveRow)
        cards.insertAdjacentElement("afterbegin", row)
    }
}

