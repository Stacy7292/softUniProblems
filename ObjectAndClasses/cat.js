function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

        getOldder() {
            this.age++;
        }

        setName(name) {
            this.name = name;
        }
    }

    for (let partsStr of arr) {
        let partArr = partsStr.split(" ");
        let name = partArr[0];
        let age = partArr[1];

        let firstCat = new Cat(name, age);

        firstCat.meow();
        firstCat.setName("Lilly");
        firstCat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);