function solve(arr){
    let result = "";

    for (let word of arr){
        result += word;
    }
    console.log(result);
}

solve(["First",
"Second",
"Third"]);