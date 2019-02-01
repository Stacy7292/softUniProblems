function solve(word, text){
    text = text.toLowerCase().split(" ");
    let count = 0;
    
    for (let words of text){
        if (words.includes(word) && words.length === word.length){
            console.log(word);
            count++;
            break;
        } 
    }

    if (count === 0){
        console.log(`${word} not found!`);
    }
}

solve('javascript',
'JavaScriptt is the best programming language');
