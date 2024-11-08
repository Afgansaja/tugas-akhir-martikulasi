let hari = 1;
switch (hari) {
    case 1:
      console.log("Senin");
      break;
    case 2:
      console.log("Selasa");
      break;
    case 3:
      console.log("Rabu");
      break;
    case 4:
      console.log("Kamis");
      break;
    case 5:
      console.log("Jumat");
      break;
    case 6:
      console.log("Sabtu");
      break;
    case 7:
      console.log("Minggu");
      break;
    default:
      console.log("Tidak Ada Hari Ke " + hari);
      break;
  }
  // for loop 
for (let i = 0; i < 10;i++) {
    console.log(i)
    
}
// Do while 
let d = 0;
do {
    console.log(d)
   
   
    d++
} while ( d < 10)

// Function
function myfunction() {
    alert("Hello!");
}
function nama(name) {
    console.log(nama saya+name);


    name("afgan")
}
    nama("afgan");

// DOM
document.getElementById("nama").innerHTML = "afgan";

let myImage = document.getElementById("image");
myImage.setAttribute('src' , './asset/download.jpg');

let css = document.getElementById("nama");
css.style.textAlign = 'center';














