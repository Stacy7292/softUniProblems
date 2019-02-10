function solve(arr) {
    let systemRegister = {};

    for (let inputLine of arr){
        let [system, component, subcomponent] = inputLine.split(" | ");

        if (!systemRegister.hasOwnProperty(system)){
            systemRegister[system] = {};
        }

        if (!systemRegister[system].hasOwnProperty(component)){
            systemRegister[system][component] = new Set();
        }

        systemRegister[system][component].add(subcomponent);
    }
//console.log(Object.entries(systemRegister))
    let sortedSystemRegister = Object.entries(systemRegister).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length
        || a[0].localeCompare(b[0]));

    for (let i = 0; i < sortedSystemRegister.length; i++){
        sortedSystemRegister[i][1] = Object.entries(sortedSystemRegister[i][1]).sort((a, b) => b[1].size - a[1].size);
    }

    for (let systemArr of sortedSystemRegister){
        console.log(`${systemArr[0]}`);

        for (let componentArr of systemArr[1]){
            console.log(`|||${componentArr[0]}`);

            for (let subcomponentName of componentArr[1]){
                console.log(`||||||${subcomponentName}`)
            }
        }

    }
   // console.log(sortedSystemRegister)
}

//create an object

solve(["SULS | Main Site | Home Page",
"SULS | Main Site | Login Page",
"SULS | Main Site | Register Page",
"SULS | Judge Site | Login Page",
"SULS | Judge Site | Submittion Page",
"Lambda | CoreA | A23",
"SULS | Digital Site | Login Page",
"Lambda | CoreB | B24",
"Lambda | CoreA | A24",
"Lambda | CoreA | A25",
"Lambda | CoreC | C4",
"Indice | Session | Default Storage",
"Indice | Session | Default Security"]);

/*
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']]);

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],

 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],

 ['Cancelled']]);
*/
/*
]	{ Destination: 'Alabama', Status: 'Cancelled' }
{ Destination: 'California', Status: 'Cancelled' }
{ Destination: 'Texas', Status: 'Cancelled' });

*/

/*
solve(["Appricot : 20.4",
"Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
"T-Shirt : 10"]);
*/
