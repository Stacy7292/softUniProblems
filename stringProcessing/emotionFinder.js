function solve(sentence){
    let text = sentence.split(" ");

    for (let i = 0; i< text.length; i++){
        if (text[i].startsWith(":") && text[i].length == 2){
            console.log(text[i]);
        }
    }
}

solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');