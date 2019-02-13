function solve(arr) {
    arr.pop();
    let gladiatorsMap = new Map();

    for (let inputLine of arr) {
        if (inputLine.includes(" -> ")) {
            let [name, technique, skill] = inputLine.split(" -> ");
            skill = +skill;

            if (!gladiatorsMap.has(name)) {
                gladiatorsMap.set(name, new Map());

                let techniques = gladiatorsMap.get(name);

                if (!techniques.has(technique)) {
                    techniques.set(technique, 0);
                }

                let oldSkill = techniques.get(technique);
                if (oldSkill < skill) {
                    techniques.set(technique, skill);
                }
            }
        } else {
            let [firstGladiator, secondGladiator] = inputLine.split(" vs ");
            battles(firstGladiator, secondGladiator);
        }
    }


    function battles(firstGladiator, secondGladiator) {
        if (gladiatorsMap.has(firstGladiator) && gladiatorsMap.has(secondGladiator)) {
            let firstGladiatorTechnique = gladiatorsMap.get(firstGladiator);
            let secondGladiatorTechnique = gladiatorsMap.get(secondGladiator);
            let secondKeys = [...secondGladiatorTechnique.keys()];
            let common = [...firstGladiatorTechnique.keys()].filter(el => secondKeys.includes(el));

            let firstGSkill = 0;
            let secondGSkill = 0;

            for (let skills of common) {
                firstGSkill += firstGladiatorTechniques.get(skills);
                secondGSkill += secondGladiatorTechniques.get(skills);
            }

            if (firstGSkill > secondGSkill) {
                gladiatorsMap.delete(secondGladiator);
            } else {
                gladiatorsMap.delete(firstGladiator);
            }
        }
    }

    function compareGladiators(a, b){
        let aName = a[0];
        let bName = b[0];
        let aTechniques = a[1];
        let bTechniques = b[1];

        let aTotalSkill = [...aTechniques].map(el => el[1]).reduce((c, d) => c + d, 0);
        let bTotalSkill = [...bTechniques].map(el => el[1]).reduce((c, d) => c + d, 0);

        let firstCriteria = bTotalSkill - aTotalSkill;

        if (firstCriteria === 0){
            return aName.localeCompare(bName);
        }
        return firstCriteria;
    }

    function compareTechniques(a, b){
        let firstCriteria = b[1] - a[1];

        if (firstCriteria === 0){
            return a[0].localeCompare[0];
        }
        return firstCriteria;
    }

    let sortedGladiators = [...gladiatorsMap].sort(compareGladiators);

    for (let [name, techniquesMap] of sortedGladiators){
        let totalSkill = [...techniquesMap].map(el => el[1]).reduce((c, d) => c + d, 0);
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTechniques = [...techniquesMap].sort(compareTechniques);

        for (let [techniqueName, techniqueSkill] of sortedTechniques){
            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }


}

solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
]);

/*
Gladius: 700 skill
- Shield <!> 250
- Support <!> 250
- Heal <!> 200
Pesho: 400 skill
- Duck <!> 400
*/