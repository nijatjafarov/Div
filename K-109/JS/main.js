var siyahi = [3, 9, 7, 4, 12]

for (let i = 0; i < siyahi.length-1; i++) {
    for (let j = 0; j < siyahi.length-1; j++) {
        if (siyahi[j + 1] < siyahi[j]) {
            var temp = siyahi[j]
            siyahi[j] = siyahi[j + 1]
            siyahi[j + 1] = temp
        }
    }
}

console.log(siyahi)