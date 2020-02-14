/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Exercise 1a
changeDivColor(document.getElementsByTagName("div"));
function changeDivColor(array) {
    for(let item of array) {
        item.style.backgroundColor = "yellow";
    }
    
}

//Exercise 1b
document.getElementById("btn").onclick = clickme;
function clickme() {
    document.getElementById("div1").style.backgroundColor = "violet";
    document.getElementById("div2").style.backgroundColor = "lime";
    document.getElementById("div3").style.backgroundColor = "hotpink";
}



