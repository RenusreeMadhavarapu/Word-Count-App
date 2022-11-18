
function update(){

    let inputTxt = document.getElementById("input").value;
    let chars= document.getElementById("char")
   let ccount = (inputTxt.trim()).split(" ").join("");
   
   chars.innerHTML=ccount.length;

}


function init() {
    document.getElementById("input").value = "";
    }
    window.onload = init;