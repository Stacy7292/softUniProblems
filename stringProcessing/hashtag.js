function solve(str){
    str = str.split(" ");

    for (let word of str){
        if (word.startsWith("#") && word.length > 1){
            let allLettersAreSymbols = true;
            let substring = word.substring(1);

            for (let symbol of substring){
                if (!isLetter(symbol)){
                    allLettersAreSymbols = false;
                    break;
                }
            }

            if (allLettersAreSymbols){
                console.log(substring);
            }
        }

    }

    function isLetter(symbol){
        let ascciCode = symbol.toLowerCase().charCodeAt(0);
        return ascciCode >= 97 && ascciCode <=122;
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');