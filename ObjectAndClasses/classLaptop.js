class Laptop {
    constructor(info, quality){
        this.info = {producer: "", age: "", band: ""};
        this.quality = quality;
        this.isOn = false;
        this.price = Number(800 - (this.info["age"] * 2) + (this.quality * 0.5));
    }

    turnOn(isOn){
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff(isOn){
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo(producer, age, brand){
        return JSON.stringify(this.info.producer);
        return JSON.stringify(this.info.age);
        return JSON.stringify(this.info.brand);
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
