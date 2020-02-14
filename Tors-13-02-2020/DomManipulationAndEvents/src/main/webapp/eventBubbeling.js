/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Exercise 2a
document.getElementById("div1").onclick = clickDiv1;
document.getElementById("div2").onclick = clickDiv2;
function clickDiv1(e) {
    console.log("Hi from div1!");
}
function clickDiv2(e) {
    console.log("Hi from div2!");
}

//Exercise 2b and 2c
document.getElementById("outer").onclick = clickOuter;
function clickOuter(e) {
    console.log(e.target.id);//Exercise 2b
    console.log(this.id);//Exercise 2b
    document.getElementById("paragraph").innerText = "The target id is: '" + e.target.id + "' and the this.id is: '" + this.id +"'"; //Exercise 2c

}