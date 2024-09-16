let buah = [
  ["Apel", 7],
  ["Jeruk", 4],
  ["Mangga", 2],
];

// 1. Menggunakan .forEach() untuk menampilkan setiap elemen dari array buah
buah.forEach(function (item) {
  // 2. Menghitung sisa buah yang belum dimakan
  let sisa = 50 - item[1];

  // 3. Menambahkan data sisa ke dalam array buah
  item.push(sisa);
});

// 4. Menampilkan nilai buah setelah penambahan data sisa
console.log(buah);
