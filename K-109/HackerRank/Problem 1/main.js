function compareTriplets(a, b) {
    let arr = [0, 0];
    
    for(let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            arr[0] = arr[0] + 1;
        } else if (a[i] < b[i]) {
            arr[1] = arr[1] + 1;
        }
        console.log(arr);
        
    }
    return arr;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));