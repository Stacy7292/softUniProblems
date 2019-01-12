function solve(arr){
    let playersAndCards = new Map();

    for (let parts of arr){
        let part = parts.split(": ");
        let name = part[0];
        let deck = part[1];
        let deckArr = deck.split(", ");

        let deckSet = playersAndCards.has(name) ? playersAndCards.get(name) : new Set();

        for (let card of deckArr){
            deckSet.add(card);
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

                switch (cardPower){
                    case "2":
                        cardPower = 2;
                        break;
                    case "3":
                        cardPower = 3;
                        break;
                    case "4":
                        cardPower = 4;
                        break;
                    case "5":
                        cardPower = 5;
                        break;
                    case "6":
                        cardPower = 6;
                        break;
                    case "7":
                        cardPower = 7;
                        break;
                    case "8":
                        cardPower = 8;
                        break;
                    case "9":
                        cardPower = 9;
                        break;
                    case "J":
                        cardPower = 11;
                        break;
                    case "Q":
                        cardPower = 12;
                        break;
                    case "K":
                        cardPower = 13;
                        break;
                    case "A":
                        cardPower = 14;
                        break;
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

                switch (cardPower){
                    case "2":
                        cardPower = 2;
                        break;
                    case "3":
                        cardPower = 3;
                        break;
                    case "4":
                        cardPower = 4;
                        break;
                    case "5":
                        cardPower = 5;
                        break;
                    case "6":
                        cardPower = 6;
                        break;
                    case "7":
                        cardPower = 7;
                        break;
                    case "8":
                        cardPower = 8;
                        break;
                    case "9":
                        cardPower = 9;
                        break;
                    case "10":
                        carDPower = 10
                        break;
                    case "J":
                        cardPower = 11;
                        break;
                    case "Q":
                        cardPower = 12;
                        break;
                    case "K":
                        cardPower = 13;
                        break;
                    case "A":
                        cardPower = 14;
                        break;
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
