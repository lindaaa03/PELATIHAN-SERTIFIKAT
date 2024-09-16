let angka = [14, 24, 55, 60, 32, 85];
let cariIndexAngka = angka.findIndex(function (item) {
  return item % 5 === 0 && item % 10 === 0;
});

console.log(cariIndexAngka);
