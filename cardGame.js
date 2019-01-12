function solve(arr){
    let playersAndCards = new Map();

    for (let parts of arr){
        let part = parts.split(": ");
        let name = part[0];
        let deck = part[1];

        //if we dont have a set for this key in the map, then create it;
        //otherwise we use the existing value;

        let deckSet = playersAndCards.has(name) ? playersAndCards.get(name) : new Set();
        let deckArr = deck.split(", ");

        for (let i = 0; i < deckArr.length; i++){
            deckSet.add(deckArr[i]);
        }

        playersAndCards.set(name, deckSet);

    }





}

solve(['Pesho: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Peshoslav: QH, QC, QS, QD',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Peshoslav: QH, QC, JS, JD, JC',
'Pesho: JD, JD, JD, JD, JD, JD']);

//
