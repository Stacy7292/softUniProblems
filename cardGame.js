function solve(arr){
    let playersAndCards = new Map();

    for (let parts of arr){
        let part = parts.split(": ");
        let name = part[0];
        let deck = part[1];
        let deckArr = deck.split(", ");
        let deckSet = new Set();

        for (let i = 0; i < deckArr.length; i++){
            deckSet.add(deckArr[i]);

        }
        //console.log(deckSet);
        playersAndCards.set(name, deckSet);
    }

    console.log(playersAndCards)





}

solve(['Pesho: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Peshoslav: QH, QC, QS, QD',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Peshoslav: QH, QC, JS, JD, JC',
'Pesho: JD, JD, JD, JD, JD, JD']);








/* solve(["Bulgaria -> Sofia -> 500",
"Bulgaria -> Sopot -> 800",
"France -> Paris -> 2000",
"Albania -> Tirana -> 1000",
"Bulgaria -> Sofia -> 200"]);

solve(["Pesho: 2C, 4H, 9H, AS, QS",
"Slav: 3H, 10S, JC, KD, 5S, 10S",
"Peshoslav: QH, QC, QS, QD",
"Slav: 6H, 7S, KC, KD, 5S, 10C",
"Peshoslav: QH, QC, JS, JD, JC",
"Pesho: JD, JD, JD, JD, JD, JD"]);
*/
