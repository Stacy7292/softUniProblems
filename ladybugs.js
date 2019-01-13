// create an array, called field;
// insert each ladybug at the given index;
// process each command - take the ladybugs from the given index and place it on the index according to the given length;
// if it flies away from the field, it is gone;
// if there is a ladybug at the destination, the ladybug lands at the next free index;
// if the destination is negaitve, switch the command;
// print the field and if there is a ladybug- print 1, if not - print 0;

function solve(arr){
    const fieldSize = arr.shift();
    let field = [];
    let ladybugIndexes = arr.shift().split(" ").map(Number);

    //initialize the field array with zeros; no ladybugs by default;
    for (let i = 0; i < fieldSize; i++){
        field[i] = 0;
    }

    for (let i = 0; i < ladybugIndexes.length; i++){
        let indexWithLadybug = ladybugIndexes[i];
        field[indexWithLadybug] = 1;
    }

    for (let parts of arr){
        let [prevIndex, command, nextIndex] = parts.split(" ");
        prevIndex = +prevIndex;
        nextIndex = +nextIndex;

        if (command === "right"){
            if (field[nextIndex] === 0){
        field[nextIndex] += field[prevIndex];
        field[prevIndex] = 0;
            } else {
                
            }
        }
    }



    console.log(field)


}



solve([ 3, "0 1",
"0 right 1",
"2 right 1"])
