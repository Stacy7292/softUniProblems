function solve(arr) {
    let storeObj = {};
 
    for (let i = 0; i < arr[0].length - 1; i += 2) {
        storeObj[arr[0][i]] = +arr[0][i + 1];
    }
    for (let i = 0; i < arr[1].length - 1; i += 2) {
        arr[1][i] in storeObj ?
            storeObj[arr[1][i]] += +arr[1][i + 1]
            : storeObj[arr[1][i]] = +arr[1][i + 1];
    }
    console.log(storeObj)
}

solve([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
]);