"use strict";
function swap(a, b) {
    var c = a;
    a = b;
    b = c;
    return [a, b];
}
console.log("ans " + swap("mahesh", "afroz"));
