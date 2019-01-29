function solve(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let n = arr.shift();
    let typeList = arr.pop();
    let songs = [];

    for (let i = 0; i < n; i++) {
        let [type, name, time] = arr[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeList === "all") {
        songs.forEach((el) => console.log(el.name));
    } else {
        songs.filter((el) => el.type === typeList).forEach((el) => console.log(el.name));
    }

}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);