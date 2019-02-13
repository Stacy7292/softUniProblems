function solve(arr) {
  let systemRegister = {};

  for (let inputLine of arr) {
    let [system, component, subcomponent] = inputLine.split(" | ");

    if (!systemRegister.hasOwnProperty(system)) {
      systemRegister[system] = {};
    }

    if (!systemRegister[system].hasOwnProperty(component)){
      systemRegister[system][component] = new Set();
    }

    systemRegister[system][component].add(subcomponent);

  }

  let sortedSystemRegister = Object.entries(systemRegister).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length
  || a[0].localeCompare(b[0]));

  for (let i = 0; i < sortedSystemRegister.length; i++){
    sortedSystemRegister[i][1] = Object.entries(sortedSystemRegister[i][1]).sort((a, b) => b[1].size - a[1].size);
  }

  for (let systemArr of sortedSystemRegister){
    console.log(`${systemArr[0]}`);

    for (let componentArr of systemArr[1]){
      console.log(`|||${componentArr[0]}`);

      for (let subcomponentArr of componentArr[1]){
        console.log(`||||||${subcomponentArr}`);
      }
    }
  }

}

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
  "Indice | Session | Default Security"
]);

/*
Lambda
|||CoreA
||||||A23
||||||A24
||||||A25
|||CoreB
||||||B24
|||CoreC
||||||C4
SULS
|||Main Site
||||||Home Page
||||||Login Page
||||||Register Page
|||Judge Site
||||||Login Page
||||||Submittion Page
|||Digital Site
||||||Login Page
Indice
|||Session
||||||Default Storage
||||||Default Security

*/
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

