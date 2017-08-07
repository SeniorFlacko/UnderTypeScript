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
