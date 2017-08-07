"use strict";
/* Tipos implicitos  En su declaracion */
// string
var myName = 'Cris';
// number
var myAge = 21.6;
//boolean
var hasBoobies = true;
/* Tipos explicitos */
//type any (No recomendado)
var myRealAge;
myRealAge = 21;
myRealAge = "21";
//type number
var myTrueAge;
myTrueAge = 21;
//type string
var myTrueName;
myTrueName = "Flacko!";
//array of string
var hobbies = ["Cooking", "Sports"];
console.log(typeof hobbies[0]);
//tuples
var address = ["JJ Cantu", 218];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
//Any can take various forms can be 
// String and then Object and then a Number
var car = "BMW";
console.log(car);
car = { car: "BMW", series: 3 };
console.log(car);
