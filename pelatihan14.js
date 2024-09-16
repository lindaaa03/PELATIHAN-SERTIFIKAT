// 1. Fungsi rekursif untuk membalikkan string
function balikKata(str) {
  // 2. Base case: jika string kosong, kembalikan string kosong
  if (str === "") {
    return "";
  } else {
    // 3. Recursive call: panggil balikKata() dengan substring dan tambahkan karakter pertama
    return balikKata(str.substr(1)) + str[0];
  }
}

// 4. Menampilkan hasil dengan console.log()
console.log(balikKata("Skilvul"));
