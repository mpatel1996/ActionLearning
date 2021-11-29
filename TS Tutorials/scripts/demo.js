"use strict";
// ...colors in function argument = REST Operator
let showColor = function (message, ...color) {
    console.log(message, color);
    for (let i in color) {
        console.log(color[i]);
    }
};
var message = "List of color";
let colArr = ["red", "blue", "green"];
// Example to show colors became an array during fuction argument 
showColor(message, "pink", "yellow", "Cayan");
// ...colArr in function call = Spread Operator
showColor(message, ...colArr);
//# sourceMappingURL=demo.js.map