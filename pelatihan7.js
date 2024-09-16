let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];
let cariHewan = hewan.find(
  (item) => item.startsWith("J") && item.endsWith("h")
);

console.log(cariHewan);
