function solve(arr) {
    let catalogue = {};

    for (let inputLine of arr) {
        let [name, price] = inputLine.split(" : ");
        price = +price;
        let initial = name[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }
        let products = catalogue[initial];
        products[name] = price;
    }

    let sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [initial, products] of sorted) {
        let sortedProducts = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));

        console.log(initial);
        for (let [name, price] of sortedProducts) {
            console.log(`  ${name}: ${price}`);
        }
    }
}

solve(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);