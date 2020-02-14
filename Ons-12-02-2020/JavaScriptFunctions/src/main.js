/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//JavaScript functions and Callbacks
//Exercise 1
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}
;

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    if (typeof n1 === "number" && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        throw new Error("Remember to always use two numbers and only to do a callback");
    }
};

//Exercise 2
console.log(add(1, 2));
//What will this print?
//This will add the two numbers(1 and 2) toghter, using the funciton add

console.log(add);
//What will it print and what does add represent?
//This will print the out the whole function, and not use the function
//Add is the name of the function

console.log(add(1, 2, 3));
//What will it print
//It will ignore the 3 and print out what 1+2 is, so it will print out 3

console.log(add(1));
//What will it print
//NaN, as it is trying to add 1 togehter with the n2 value, which is undefinded and therefore Not A Number

console.log(cb(3, 3, add));
//What will it print
//Result from the two numbers: 3 + 3 = 6

console.log(cb(4, 3, sub));
//What will it print
//Result from the two numbers: 4 - 3 = 1

try {
    console.log(cb(3, 3, add()));
} catch (e) {
    if (e instanceof Error) {
        console.error(e.name + ': ' + e.message);
    } else if (e instanceof RangeError) {
        console.error(e.name + ': ' + e.message);
    }
   
}
//What will it print (and what was the problem)
//It won't print anything, but throw an error. It will try to calculate the following (3,3, NaN)
//NaN means "Not A Number.

console.log(cb(3, "hh", add));
//What will it print
//Result from the two numbers: 3 + hh = 3hh

//Exercise 3
//Added the error handling to the cb function in the top and to the by using an if else statement that checks that
//there is only being used numbers and a valid function and a try catch block that catches the error around the call 

//Exercise 4
function mul(n1, n2) {
    return n1 * n2;
};

console.log(cb(3, 3, mul));
//It can now multiplicate 3 and 3 and get 9!

//Exercise 5
console.log(cb(3, 3,function(n1, n2) {
    return n1 / n2;
}));
//The function can now devide 3 and 3 and get 1!

//Callbacks
//Exercise 1
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
let shortNames = names.filter(function(a){
   if(a.length <=3) {
       return a;
   } 
});

names.forEach(function(value) {
   console.log(value); 
});
console.log();
shortNames.forEach(function(value) {
   console.log(value); 
});

//Exercise 2
let mapAll = names.map(function(a){ return a.toUpperCase(); });
console.log(mapAll);
console.log();

//Exercise 3
function putUlAndLiOn(map){
    map = "<ul><li>" + map.join("</li><li>") + "</li><ul>";
    return map;
};
console.log(putUlAndLiOn(mapAll));
console.log();


//Exercise 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
let CarsAfter1999 =  cars.filter(function(a) {
	return a.year > 1999;
});

let CarsUnder5k =  cars.filter(function(a) {
	return a.price < 5000;
});

let Volvos = cars.filter(function(a) {
    return a.make === "Volvo";
    });
console.log("Cars after 1999");    
console.log(CarsAfter1999);
console.log("under 5k");
console.log(CarsUnder5k);
console.log("Volvos");
console.log(Volvos);

//Asynchronous Callbacks
//Exercise 1
//My guess would be to see them in this order:
//1. "aaaaaaaaaa"
//2. "dddddddddd"
//3. "ffffffffff"
//4. "eeeeeeeeee"
//5. "bbbbbbbbbb"

//Exercise 2
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//My guess was correct! Yeah
//The reason for this, is that the console.log will just get executed as normal,from top to bottom,
//but the msgPrinter, has a delay on them, one on 1000 miliseconds and one on 2000 milisecods
