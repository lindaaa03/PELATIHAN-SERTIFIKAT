const name = "Linda";

const regex = /[^aeiou]/gi;

const result = name.match(regex);
console.log(result);

const newName = result.join("");

console.log(newName);
