const foods = ["siomay", "dimsum", "gyoza", "pangsit"];

// 1. Mendefinisikan function checkFood
function checkFood(foodName) {
  // 2. Membuat variabel untuk kondisi
  let isNotEmptyString = foodName !== "";
  let foodIsIncluded = foods.includes(foodName);

  // 3. Mengecek kondisi dan memberikan output sesuai hasil
  if (isNotEmptyString && foodIsIncluded) {
    console.log("Makanan sudah tersedia");
    console.log(foods);
  } else {
    // 4. Menambahkan foodName ke dalam array foods dan menampilkan hasil
    foods.push(foodName);
    console.log(foods);
  }
}

// 5. Memanggil function checkFood dengan parameter "Kwetiaw"
checkFood("Kwetiaw");
