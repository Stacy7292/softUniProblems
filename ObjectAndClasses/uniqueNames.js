function solve(arr) {
    let set = new Set();

    for (let name of arr) {
        set.add(name);
    }

    let sorted = [...set.keys()]
        .sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sorted.join("\n"));
}

solve(["Denise",
"Ignatius",
"Iris",
"Isacc",
"Indie",
"Dean",
"Donatello",
"Enfuego",
"Benjamin",
"Biser",
"Bounty",
"Renard",
"Rot"]);

/*
solve(["Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
])
*/