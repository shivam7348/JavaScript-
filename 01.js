const marvelHeroes = ["thor", "ironman", "spiderman"]

const dc = ["superman", "flash", "batman"]

// marvelHeroes.push(dc)
//  marvelHeroes.push(dc)

// console.log(marvelHeroes);

// console.log(marvelHeroes[3][1]);
const all_heroes = marvelHeroes.concat(dc)

console.log(all_heroes);

const allnewHeroes = [...marvelHeroes, ...dc]
console.log(allnewHeroes);


