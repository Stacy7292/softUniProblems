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


    for (let [name, deckSet] of playersAndCards){
        let multipliedCards = 1;
        let sum = 0;

        for (let card of deckSet){
            if (card.length === 2){
                let cardPower = card[0];
                let cardType = card[1];

                if (cardPower === "2"){
                    cardPower = 2;
                } else if (cardPower === "3"){
                    cardPower = 3;
                } else if (cardPower === "4"){
                    cardPower = 4;
                }else if (cardPower === "5"){
                    cardPower = 5;
                }else if (cardPower === "6"){
                    cardPower = 6;
                }else if (cardPower === "7"){
                    cardPower = 7;
                }else if (cardPower === "8"){
                    cardPower = 8;
                }else if (cardPower === "9"){
                    cardPower = 9;
                } else if (cardPower === "J"){
                    cardPower = 11;
                }else if (cardPower === "Q"){
                    cardPower = 12;
                }else if (cardPower === "K"){
                    cardPower = 13;
                }else if (cardPower === "A"){
                    cardPower = 14;
                }

                switch (cardType){
                    case "S":
                        cardType = 4;
                        break;
                    case "H":
                        cardType = 3;
                        break;
                    case "D":
                        cardType = 2;
                        break;
                    case "C":
                        cardType = 1;
                        break;
                }

                multipliedCards = cardPower * cardType;
                sum += multipliedCards;
            }

            if (card.length === 3){
                let cardPower = card[0] + card[1];
                let cardType = card[2];

                if (cardPower === "2"){
                    cardPower = 2;
                } else if (cardPower === "3"){
                    cardPower = 3;
                } else if (cardPower === "4"){
                    cardPower = 4;
                }else if (cardPower === "5"){
                    cardPower = 5;
                }else if (cardPower === "6"){
                    cardPower = 6;
                }else if (cardPower === "7"){
                    cardPower = 7;
                }else if (cardPower === "8"){
                    cardPower = 8;
                }else if (cardPower === "9"){
                    cardPower = 9;
                } else if (cardPower === "10"){
                    cardPower = 10;
                } else if (cardPower === "J"){
                    cardPower = 11;
                }else if (cardPower === "Q"){
                    cardPower = 12;
                }else if (cardPower === "K"){
                    cardPower = 13;
                }else if (cardPower === "A"){
                    cardPower = 14;
                }

                switch (cardType){
                    case "S":
                        cardType = 4;
                        break;
                    case "H":
                        cardType = 3;
                        break;
                    case "D":
                        cardType = 2;
                        break;
                    case "C":
                        cardType = 1;
                        break;
                }

                multipliedCards = cardPower * cardType;
                sum += multipliedCards;
            }
        }
        console.log(`${name}: ${sum}`);
    }
}

//for every player, take his deck;
//for every deck, take its cards;
//take the power and type of each cards
//calculate the value of cards;

solve(['Pesho: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Peshoslav: QH, QC, QS, QD',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Peshoslav: QH, QC, JS, JD, JC',
'Pesho: JD, JD, JD, JD, JD, JD']);

//
