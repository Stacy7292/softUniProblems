function solve(arr) {
    let [text, words] = arr;

    while (text.includes("_")) {
        let startIndex = text.indexOf("_");
        let length = 0;
        let index = startIndex;

        while (text[index] === "_") {
            length++;
            index++;
        }

        let word = words.filter(el => el.length === length);
        text = text.replace("_".repeat(length), word);
    }

    console.log(text)

}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);