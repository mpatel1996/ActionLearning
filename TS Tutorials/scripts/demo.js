"use strict";
// // ...colors in function argument = REST Operator
// let showColor = function (message, ...color) {
//   console.log(message, color);
//   for (let i in color) {
//     console.log(color[i]);
//   }
// };
// var message = "List of color";
// let colArr = ["red", "blue", "green"];
// // Example to show colors became an array during fuction argument
// showColor(message, "pink", "yellow", "Cayan");
// // ...colArr in function call = Spread Operator
// showColor(message, ...colArr);
let arr = ["hello", "world", "This Mihir"];
var na = (arr) => {
    let newArr = []; // = [] as any; removed " Type 'any' is not assignable to type 'never'. issue"
    for (var i = 0; i < arr.length; i++) {
        newArr.push({
            name: arr[i],
            length: arr[i].length
        });
    }
    ;
    return newArr;
};
console.log(na(arr));
//# sourceMappingURL=demo.js.map