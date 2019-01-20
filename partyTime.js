// 1. take the first reservation list, until command "PARTY" and add it to a list, called reservations
// 2. take the second guest list, after command "PARTY", and add it to a new list, called guests;
// 3. loop through the first list and check if it has the guests from the second list;
// 4. if not, add them to a new set, called nonVisitors;
// 5. we separate the set nonVisitors into two new arrays - VIP and Regular;
// 6. print the size of the set nonVisitors;
// 7. print VIP and then Regular;
// 8. done

function solve(arr){
    let reservations = new Set();
    let guests = new Set();

    for (let reservation of arr){
        if (reservation === "PARTY"){
            break;
        }

        reservations.add(reservation);
    }

    let index = arr.indexOf("PARTY");
        arr.splice(0, index + 1);

    for (let guest of arr){
        guests.add(guest);
    }

    let nonVisitors = new Set();

    for (let guest of reservations){
        if (!guests.has(guest)){
            nonVisitors.add(guest);
        }
    }

    let vipArr = [];
    let regularArr =[];

    for (let guest of nonVisitors){
        if (isNaN(Number(guest[0]))){
            regularArr.push(guest);
        } else {
            vipArr.push(guest);
        }
    }

    let length = nonVisitors.size;
    console.log(length);

    for (let ppl of vipArr){
        console.log(ppl);
    }

    for (let ppl of regularArr){
        console.log(ppl);
    }

}

solve(["m8rfQBvl",
"fc1oZCE0",
"UgffRkOn",
"7ugX7bm0",
"9CQBGUeJ",
"2FQZT3uC",
"dziNz78I",
"mdSGyQCJ",
"LjcVpmDL",
"fPXNHpm1",
"HTTbwRmM",
"B5yTkMQi",
"8N0FThqG",
"xys2FYzn",
"MDzcM9ZK",
"PARTY",
"2FQZT3uC",
"dziNz78I",
"mdSGyQCJ",
"LjcVpmDL",
"fPXNHpm1",
"HTTbwRmM",
"B5yTkMQi",
"8N0FThqG",
"m8rfQBvl",
"fc1oZCE0",
"UgffRkOn",
"7ugX7bm0",
"9CQBGUeJ"])
/*
solve(["7IK9Yo0h",
"9NoBUajQ",
"Ce8vwPmE",
"SVQXQCbc",
"tSzE5t0p",
"PARTY",
"9NoBUajQ",
"Ce8vwPmE",
"SVQXQCbc"])
*/
