let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let genap = angka.filter(function (item) {
  return item % 2 === 0;
});

console.log(genap);
