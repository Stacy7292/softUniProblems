function solve(arr){
    arr.shift();
    let jsonTowns = [];

    for (let inputLine of arr){
        let [town, lat, long] = inputLine.split("|").filter(Boolean).map(el => el.trim(  ));

        lat = +Number(lat).toFixed(2);
        long = +Number(long).toFixed(2);

        jsonTowns.push(JSON.stringify({
            Town: town,
            Latitude: lat,
            Longitude: long
        }));
    }

    console.log(`[${jsonTowns.join(",")}]`);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

/*
[{"Town":"Sofia","Latitude":42.70,"Longitude":23.33},
{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]

*/