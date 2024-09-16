class Pelajar {
  constructor(nama, sekolah) {
    this.setNama(nama);

    this.setSekolah(sekolah);
  }

  setNama(nama) {
    this._nama = nama;
  }

  setSekolah(sekolah) {
    this._sekolah = sekolah;
  }

  getNama() {
    return this._nama;
  }

  getSekolah() {
    return this._sekolah;
  }

  belajar() {
    return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}

const pelajar = new Pelajar("Alpha", "Skilvul");

console.log(pelajar.belajar());
