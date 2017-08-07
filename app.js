"use strict";
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("ARROW FUNCTION");
/* Las viejas funciones */
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(1, 1));
/*
    Las Funciones arrow se igualan directamente a los parmetros
    Con el operador flecha se especifica el body de la funcion

    Si solo es un return puede ir en una misma linea y sin la palabra return

 */
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(3, 3));
/* Funcion arrow sin parametros */
var greet = function () {
    console.log("hello!!!!");
};
greet();
/* Funcion arrow con un parametro */
var greetFriend = function (friend) { return console.log("hello!!!!" + friend); };
greetFriend("Pancho");
/* Funcion arrow mas de un parametro */
var greetFriends = function (friend1, friend2) { return console.log("hello!!!!" + friend1 + " " + friend2); };
greetFriends("Pancho", "Cris");
//Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log("Init", start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
//Inicia countdown con un valor por defecto de 10
countdown();
//Inicia countdown con un valor de 30
countdown(30);
//REST & Spread
console.log("REST AND SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 7, 8, 8, 8));
console.log("DESTRUCTORS");
console.log("Destructuring Array");
var myHobbies = ["Cooking", "Sports"];
var ho1 = myHobbies[0], ho2 = myHobbies[1];
console.log(ho1, ho2);
console.log("Destructuring Object");
var userDatos = { userName: "Cris", age: 21 };
var userName = userDatos.userName, age = userDatos.age;
console.log(userName, age);
//TEMPLATE LITERALS
console.log("TEMPLATE LITERALS");
var userNombre = "Cristian";
var saludo = "\n    Hola, " + userNombre + " !\n    Soy un template literal\n\n";
console.log(saludo);
