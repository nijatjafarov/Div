var aylar_31 = [1, 3, 5, 7, 8, 10, 12]
var aylar_30 = [4, 6, 9, 11]

var gun = parseInt(prompt('Bugün ayın neçəsidir?'))
var ay = parseInt(prompt('Neçənci aydır?'))
var il = parseInt(prompt('Neçənci ildir?'))

while (gun < 1) {
   gun = parseInt(prompt('Gün 1-dən kiçik ola bilməz')) 
}

while (ay < 1) {
   ay = parseInt(prompt('Ay 1-dən kiçik ola bilməz')) 
}

while (il < 1) {
   il = parseInt(prompt('İl 1-dən kiçik ola bilməz')) 
}

if (gun < 28) {
    gun++;
} else {
    if (ay == 2) {
        if (gun == 28) {
            gun = 1
            ay = 3
        } else {
            gun = parseInt(prompt('Fevral 28-dən böyük ola bilməz')) 
        }
    } else if (aylar_30.includes(ay)) {
        if (gun < 30) {
            gun++;
        } else if (gun == 30) {
            gun = 1
            ay++;
        } else {
            gun = parseInt(prompt('Bu ayda 30-dan böyük gün ola bilməz'))
        }
    } else if (aylar_31.includes(ay)) {
        if (gun < 31) {
            gun++;
        } else if (gun == 31) {
            gun = 1
            ay++;
        } else {
            gun = parseInt(prompt('Bu ayda 30-dan böyük gün ola bilməz'))
        }
    }
}

alert(`${gun}.${ay}.${il}`)