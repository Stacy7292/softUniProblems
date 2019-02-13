function solve(arr) {
    let [first, second, word] = arr;
    let vowels = ["a", "e", "o", "u", "i"];
    let reversedPass = "";
    let thirdIndex = 0;
    let combined = first.concat(second);

    for (let i = 0; i < combined.length; i++) {
        if (vowels.includes(combined[i].toLowerCase())) {
            let vowelIndex = thirdIndex % word.length;
            thirdIndex++;
            reversedPass += word[vowelIndex].toUpperCase();
        } else {
            reversedPass += combined[i];
        }
    }

    let password = [...reversedPass].reverse().join("");
console.log(`Your generated password is ${password}`)
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);