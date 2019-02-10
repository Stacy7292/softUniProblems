function solve(arr) {

    class Product {
        constructor(name, price){
            this.name = name;
            this.price = price;
        }
    }

    let catalogue = [];

    for (let inputLine of arr){
        let [name, price] = inputLine.split(" : ");
        price = Number(price);

        let newProduct = new Product(name, price);
        catalogue.push(newProduct);
    }

    let sortedCatalogue = catalogue.sort((a, b) => a.name.localeCompare(b.name));
    let flagLetter = "";

    for (let product of sortedCatalogue){
        let initialLetter = product.name[0];

        if (initialLetter != flagLetter){
            console.log(initialLetter);
            flagLetter = initialLetter;
        }

        console.log(`${product.name}: ${product.price}`);
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

// loop through the array and take the initial letter
// create a class with name Product with two properties: name, price;
//
/*
 A
Anti-Bug Spray: 15
Apple: 1.25
Appricot: 20.4
 B
Boiler: 300
 D
Deodorant: 10
 F
Fridge: 1500
 T
T-Shirt: 10
TV: 1499
 */
