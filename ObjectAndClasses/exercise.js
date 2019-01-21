function solve(arr) {
    let storage = [];

  for (let inputLine of arr){
      let [name, level, items] = inputLine.split(" / ");
      level = +level;
      items = items.split(", ");

      storage.push(JSON.stringify({name, level, items}));

  }
      console.log(`[${storage}]`)
}

solve(["Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / Desolator, Sentinel, Antara"])