var input = document.querySelector('input')
var list = document.querySelector('#list')

function add() {
    var listItem = document.createElement('div')
    listItem.className = 'list-item'
    var listItemText = document.createElement('b')
    listItemText.innerText = input.value;
    listItem.appendChild(listItemText)
    var deleteButton = document.createElement('img')
    deleteButton.src = 'delete.svg'
    deleteButton.addEventListener('click', function() {
        list.removeChild(this.parentElement)
    })
    listItem.appendChild(deleteButton)
    list.insertBefore(listItem, list.firstChild)
    input.value = ''
}