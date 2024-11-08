//Array
let angka = ( 1, 2 , 3 , 4 , 5);
let buah = ("anggur","apel","nanas","jeruk","mangga");

// mengambil semua data Array
console.log(buah);

// mengambil salah satu data di Array
console.log(buah[2]);

// menambah data di Array
angka.push(6);
console.log(angka);

// menghapuh data terakhir di Array
angka.pop()
console.log(angka);
 
// menghitung jumlah data di Array
console.log(buah length);

// For each
    buah.forEach(function(item , index){
        console.log(index , item);
    })
    
// Call back 
function getData(callback) { 
    setTimeout(async () => { 
      const API = await fetch( 
        "https://fortunate-burnt-sweatshirt.glitch.me/user/3" 
      ); 
      const data = await API.json(); 
      callback(data) 
    }, 3000); 
  } 
   
  function displayData(data) { 
      console.log(data); 
  } 
  getData(displayData); 
   
  // Promise 
  let promise = new Promise((resolve , reject) => { 
      let succes = true; 
      setTimeout(() => { 
          if (succes) { 
              resolve("Operasi Berhasil"); 
          } else { 
              reject("Operasi Gagal"); 
          } 
      }, 3000); 
  }); 
   
  promise.then((message) => { 
      console.log(message);  
  }).catch((error) => { 
      console.log(error); 
  })

  function getDataId() {
    return new Promise((resolve , reject) => {
        setTimeout( async () => {
            const API = await fetch(
                "https://fortunate-burnt-sweatshirt.glitch.me/user/3"
              );
              const data = await API.json();
            resolve(data);
        }, 3000)
    })
}

async function fecthData(){
    try{
        const data = await getDataId();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

