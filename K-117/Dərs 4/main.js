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

var responsiveRow = document.createElement('div')
responsiveRow.className = 'responsive-row'
row.appendChild(responsiveRow)
row.appendChild(responsiveRow.cloneNode())

cards.insertAdjacentElement("afterbegin", row)

function addCard() {
    var imgInputValue = document.querySelector('#card-image').value
    var h3InputValue = document.querySelector('#card-title').value
    var categoryInputValue = document.querySelector('#card-category').value
    var dateInputValue = document.querySelector('#card-date').value

    if (!imgInputValue || !h3InputValue || !categoryInputValue || !dateInputValue) {
        alert("You haven't provided all information")
    } else {
        var card = document.createElement('div')
        card.className = 'card'
        var img = document.createElement('img')
        img.src = imgInputValue
        card.appendChild(img)
        var h3 = document.createElement('h3')
        h3.innerText = h3InputValue
        card.appendChild(h3)
        var a = document.createElement('a')
        a.innerText = categoryInputValue
        card.appendChild(a)
        var p = document.createElement('p')
        p.innerText = dateInputValue
        card.appendChild(p)

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
    if(!img.complete) {
        alert('There is a problem with the image')
    }
}

