/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//exercise a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log("The two arrays:");
console.log(boys);
console.log(girls);
console.log();

//exercise b
var all = boys.concat(girls);
console.log("Standard all array, that has been joined by the concat. Boys first, girls last:");
console.log(all);
console.log();

//exercise c
//With a comma
console.log("With a comma:");
var withComma = all.join(', ');
console.log(withComma);
console.log();
//With a hyphen
console.log("With a hyphen:");
var withHyphen = all.join(' - '); 
console.log(withHyphen);
console.log();

//exercise d
all.push('Lone' , 'Gitte');
console.log(all);
console.log();

//exercise e
all.unshift('Hans', 'Kurt');
console.log(all);
console.log();

//exercise f
all.shift();
console.log(all);
console.log();

//exercise g
all.pop();
console.log(all);
console.log;

//exercise h
all.splice(3,2);
console.log(all);
console.log();

//exercise i
all.reverse();
console.log(all);
console.log();

//exercise j
all.sort();
console.log(all);
console.log();

//exercise k
all.sort(function (a,b){
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
});
console.log(all);
console.log();

//exercise L
var mapAll = all.map(function(a){ return a.toUpperCase(); });
console.log(mapAll);
console.log();

//exercis m
console.log(all.filter(function(a){
    if(a.includes("l")|| a.includes("L"))
        return a;
}));
console.log();
