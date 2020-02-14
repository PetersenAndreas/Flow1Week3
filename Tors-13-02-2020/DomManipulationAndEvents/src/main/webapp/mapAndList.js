/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let mapNames = names.map(function(e){return e;});
//Exercise 3a
function putUlAndLiOn(map){
    map = "<ul><li>" + map.join("</li><li>") + "</li><ul>";
    return map;
};
console.log(putUlAndLiOn(mapNames));
document.getElementById("paragraph").innerHTML = putUlAndLiOn(mapNames);

//Exercise 3b
function submitToList(e) {
    e.preventDefault();
    mapNames.push(document.getElementById("input").value);
    document.getElementById("paragraph").innerHTML = putUlAndLiOn(mapNames);
    console.log(putUlAndLiOn(mapNames));
}
document.getElementById("btn").addEventListener("click", submitToList);

//Exercise 3c
function removeFirst(e) {
    e.preventDefault();
    mapNames.shift(1);
    document.getElementById("paragraph").innerHTML = putUlAndLiOn(mapNames);
    console.log(putUlAndLiOn(mapNames));
}
document.getElementById("firstBtn").addEventListener("click", removeFirst);

//Exercise 3c
function removeLast(e) {
    e.preventDefault();
    mapNames.pop(1);
    document.getElementById("paragraph").innerHTML = putUlAndLiOn(mapNames);
    console.log(putUlAndLiOn(mapNames));
}
document.getElementById("lastBtn").addEventListener("click", removeLast);