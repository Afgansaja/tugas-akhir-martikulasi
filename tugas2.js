function a() {
    let myImage= document.getElementById("Image")
    myImage.setAttribute('src', './tugas/lampu nyala.gif')
}

function b() {
    let myImage=document.getElementById("Image")
    myImage.setAttribute('src', './tugas/lampu is dead.gif' )
}

for (let i = 1; i <30.; i++) {
    if ((i % 3==0)&& i % 5==0) {
        console.log("fizz buzz");
        
        
    }
    if (i % 3==0) {
        console.log("fizz");
    }
    else if (i % 5 ==0   ) {
        console.log("buzz");
    }
    else

    console.log(i);
    
   
}