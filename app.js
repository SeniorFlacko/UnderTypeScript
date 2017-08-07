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
