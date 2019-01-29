function solve(text, word){
    let result = text.replace(word, repeat(word))

    while (text.includes(word)){
        result = text.replace(word, repeat(word));
    }

   word = repeat(word.length, "*");

    console.log(result);
}

solve("A small sentence with some words", "small");