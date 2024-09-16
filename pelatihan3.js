let nilai = [100, 80, 80, 70, 90];

let jumlahNilai = nilai.reduce(function (total, item) {
  return total + item;
}, 0);

let rataRata = jumlahNilai / nilai.length;

console.log(rataRata);
