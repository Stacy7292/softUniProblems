function solve(arr){
    // systemObject = {system, {component, subcomponent}};
    let systemObject = {};

     for (let inputLine of arr){
        let [systemName, componentName, subcomponentName] = inputLine.split(" | ");

        if (!systemObject.hasOwnProperty(systemName)){
             systemObject[systemName] = {};
        }

        if (!systemObject[systemName].hasOwnProperty(componentName)){
            systemObject[systemName][componentName] = new Set();
        }

        systemObject[systemName][componentName].add(subcomponentName);
    }

        let sortedSystem = Object.entries(systemObject).sort((a, b) => Object.keys(a[0]).length - Object.keys(b[0]).length
                || a[0].localeCompare(b[0]));

       for (let [system, components] of sortedSystem){
            console.log(system);
            let sortedComponents = Object.entries(components).sort((a, b) => Object.keys(b).length - Object.keys(a).length
                || b[0].localeCompare(a[0]));

            for (let [component, subcomponent] of sortedComponents) {
                console.log(`|||${component}`);

                for (let element of subcomponent){
                console.log(`||||||${element}`);
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
"Indice | Session | Default Security"]);
