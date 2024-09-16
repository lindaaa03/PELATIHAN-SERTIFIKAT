let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

inventory.splice(1, 1);

let item = inventory[1][0];
let jumlahTerjual = inventory[1][1];

console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);
