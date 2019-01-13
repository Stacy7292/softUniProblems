function solve(arr){
    let companies = new Map();

    for (let part of arr){
        let parts = part.split(" -> ");
        let company = parts[0];
        let id = parts[1];

        if (!companies.has(company)){
            companies.set(company, []);
        }

        let employees = companies.get(company);

        if (!employees.includes(id)){
             employees.push(id);
        }

        companies.set(company, employees);
    }

    let sorted = [...companies].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sorted){
        console.log(company);
        for (let id of employees){
            console.log(`--${id}`);
        }
    }
}

solve(['SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345']);

