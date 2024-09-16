localStorage.setItem("search", "pencarian 1");

const hewanArray = ["kucing", "anjing", "kambing"];
localStorage.setItem("hewan", JSON.stringify(hewanArray));

let getHewanKakiEmpat = localStorage.getItem("hewan");

let hewanKakiEmpat = JSON.parse(getHewanKakiEmpat);

console.log(hewanKakiEmpat);
