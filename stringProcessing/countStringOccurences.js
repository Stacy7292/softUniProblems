function solve(str, word){
    let count = 0;
    let words = str.split(" ");

    for (let symbol of words){
        if (symbol === word){
            count++
        }
    }

    console.log(count)
}

solve("This is a word and it also is a sentence",
"is");