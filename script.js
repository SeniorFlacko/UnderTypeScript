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
//function returns string
function returMyName() {
    return "My truely name is: " + myTrueName;
}
console.log(returMyName());
//void
function sayHello() {
    console.log("Hello");
}
sayHello();
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(3, 3));
// Funcion como un tipo
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// Funcion como un tipo mas especifico
/*
    Esto no es una funcion sino una declaracion
    De una variable la cual especificamos que tipo de
    Funciones(Signatura y Return) puede aceptar
    para ser igualada

    Declara que tipo de funciones son aceptadas
    Por la variable
 */
var myMultiply2;
myMultiply2 = multiply;
console.log(myMultiply2(100, 2));
// Objects
/*
    Typescript Infiere el esquema de un objeto
    De tal manera que nos sugiere los distintos campos
    a traves del operador punto

    userDate.name o userDate.age

    Esto nos obliga a cumplir con es esquema del
    objeto ademas debemos respetar el nombre de las
    PROPIEDADES

    El orden importa ademas del nombre.

*/
var userDate = {
    name: "Max",
    age: 27
};
userDate = {
    name: "Cristian",
    age: 21
};
/*
    Si se quiere declarar una variable explicita como
    un objeto

    Se puede hacer lo siguente aunque no es lo mas eficiente
    :/
 */
var userData = {
    name: "Cris",
    age: 21
};
var complex = {
    data: [100, 3.9, 10],
    output: function (all) {
        return this.data;
    }
};
var complejo = {
    data: [100, 3.9, 10],
    output: function (all) {
        return this.data;
    }
};
// Union Type es cuando una variable puede tener uno o mas tipos 
// Sin necesariamente ser TODOS los tipos
var myFavoriteNumber = 21;
myFavoriteNumber = 101;
// Podemos revisar que tipo de type es en tiempo de ejecucion
// mediante typeof pero el tipo debe ir entre comillas
if (typeof myFavoriteNumber == "string") {
    console.log("Es un string");
}
if (typeof myFavoriteNumber == "number") {
    console.log("Es un numero");
}
