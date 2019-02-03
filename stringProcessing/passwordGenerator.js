function solve(arr){
    let [first, second, word] = arr;
    let combined = first + second;
    let vowels = ["a", "e", "i", "o", "u"];
    let reversedPassword = "";
    let secondIndex = 0;

    for (let i = 0; i < combined.length; i++){
        if (vowels.includes(combined[i].toLowerCase())){
            let vowelIndex = secondIndex % word.length;
            secondIndex++;
            reversedPassword += word[vowelIndex].toUpperCase();
        } else {
            reversedPassword += combined[i];
        }
    }

    let password = [...reversedPassword].reverse().join("");
    console.log(`Your generated password is ${password}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);