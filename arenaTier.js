function solve(arr){
// gladiator {technique, skill};
    let gladiators = {};

    for (let inputLine of arr){
        if (inputLine === "Ave Cesar"){
            break;
        }

        if (inputLine.includes("->")){
        let [gladiatorName, technique, skill] = inputLine.split(" -> ");

            if (!gladiators.hasOwnProperty(gladiatorName)){
                gladiators[gladiatorName] = new Map();
            }

            gladiators[gladiatorName].set(technique, skill)

            if (gladiators[gladiatorName].has(technique)){
                gladiators[gladiatorName].set(technique, skill)

                let currentSkill = gladiators[gladiatorName].get(technique);
                if (currentSkill < skill){
                    gladiators[gladiatorName].set(technique, skill);
                }
            }
        } else {
            let [firstGladiatorName, secondGladiatorName] = inputLine.split(" vs ");

            if (gladiators.hasOwnProperty(firstGladiatorName) && gladiators.hasOwnProperty(secondGladiatorName)){

                for (let [technique, skill] of gladiators[firstGladiatorName]){
                    if (gladiators[secondGladiatorName].has(technique)){
                        let firstSkill = gladiators[firstGladiatorName].get(technique);
                        let secondSkill = gladiators[secondGladiatorName].get(technique);

                        if (firstSkill > secondSkill){
                           delete gladiators[secondGladiatorName];
                        } else {
                           delete gladiators[firstGladiatorName];
                        }
                    }

                }
            }
        }
    }


    console.log(gladiators)
}


solve(["Pesho -> Duck -> 400",
"Julius -> Shield -> 150",
"Gladius -> Heal -> 200",
"Gladius -> Support -> 250",
"Gladius -> Shield -> 250",
"Pesho vs Gladius",
"Gladius vs Julius",
"Gladius vs Gosho",
"Ave Cesar"]);

/*
solve(["Pesho -> BattleCry ->
400",
"Gosho -> PowerPunch ->
300",
"Stamat -> Duck -> 200",
"Stamat -> Tiger ->
250",
"Ave Cesar"]);
*/
