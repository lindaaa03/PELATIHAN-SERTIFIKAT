// 1. Buatlah class bernama PersegiPanjang
class PersegiPanjang {
  // Constructor dengan parameter panjang dan lebar
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  // 2. Method luas untuk menghitung luas persegi panjang
  luas() {
    const hasil = this.panjang * this.lebar;
    return hasil;
  }

  // 3. Method keliling untuk menghitung keliling persegi panjang
  keliling() {
    const hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

// 4. Buatlah instance objek bernama persegiPanjang
const persegiPanjang = new PersegiPanjang(4, 3);

// Lakukan console.log() pada instance objek persegiPanjang
console.log(`Luas: ${persegiPanjang.luas()}`); // Menampilkan luas
console.log(`Keliling: ${persegiPanjang.keliling()}`); // Menampilkan keliling
