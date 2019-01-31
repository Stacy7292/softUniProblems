function solve(text) {
    let pascalCaseWords = [];
    let currentWord = text[0];

    for (let i = 1; i < text.length; i++) {
        if (text[i].toUpperCase() !== text[i]) {
            currentWord = currentWord.concat(text[i])
        } else {
            pascalCaseWords.push(currentWord);
            currentWord = text[i];
        }
    }
    pascalCaseWords.push(currentWord);

   console.log(pascalCaseWords.join(", "));
}

solve('HoldTheDoor');
//solve('SplitMeIfYouCanHaHaYouCantOrYouCan');