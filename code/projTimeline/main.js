let div1 = document.getElementById("d0");
let div2 = document.getElementById("d1");
let div3 = document.getElementById("d2");
let div4 = document.getElementById("d3");
let div5 = document.getElementById("d4");
let div6 = document.getElementById("d5");
let div7 = document.getElementById("d6");
let div8 = document.getElementById("d7");


let divArray = [div1, div2, div3, div4, div5, div6, div7, div8];
let counter = 0;

function swapDisplay() {
  counter++;
  for(var i = 0; i < divArray.length; i++) {
    if (i > counter) {
      divArray[counter].style.display= "block";
    }
    else {
      divArray[i].style.display = "none";
    }

  }
}
