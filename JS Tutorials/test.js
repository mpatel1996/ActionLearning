//------------------------------------
// Creating Objects
// one way to create an object
/*
console.log("**Learning how to create objects: ");
var myCar = new Object();
myCar.driver = "mihir";
myCar.drive = function(){
    console.log("Now Driving");
};

myCar.drive();


// Second way to create an object

var mycar2 = {
    maxSpeed : 39,
    driver : "Patel",
    drive : function(){
        console.log("Now Driving 2");
    },
    logDriver: function(){
        console.log("Driver name is " + this.driver);
    }
};

mycar2.drive();
mycar2.logDriver();
*/

//------------------------------------

//------------------------------------
// Creating constructors
// console.log("\n\n**Creating Constructors:");
// var Car = function(maxSpeed, driver){
//     this.maxSpeed = maxSpeed;
//     this.driver = driver;
//     this.drive = function(speed, time){
//         console.log(speed * time);
//     };
//     this.logDriver = function(){
//         console.log("Driver name is " + this.driver);
//     };
// };

// var myCar = new Car(50, "Ninja");
// var myCar2 = new Car(510, "Ginja");
// var myCar3 = new Car(540, "Dinja");

// myCar.drive(30,5);
// myCar3.logDriver();

// *****************************
// JS Assignments
// -----------------------------
// function addFunc() {
//   var n = parseInt(prompt("Enter a number"));
//   var sum = 0;
//   for (i = 1; i <= n; i++) {
//     if((i / 3 == 1) || (i / 5 == 1)){
//         sum += i;
//     }
//   }
//   console.log(sum);
// }
// addFunc();

// ******************************
// Even of Odd
// ------------------------------
// function oddOrEven(n){
//     if ( n % 2 ==0){
//         return "Even";
//     }
//     return "Odd";
// }

// document.getElementById("hello").innerHTML = oddOrEven(4);

// *******************************
// Rectangle Frame
// -------------------------------
// function ast(len){
//     var startEnd = "";
//     for (i = 0; i < len; i++){
//         startEnd += "* ";
//     }
//     return startEnd;
// }

// function getLongest(arr){
//         return arr.reduce((x,b) => x.length < b.length ? b : x, "");
// }

// function rectFrame(a){
//        var newArr = "";
//     var startEnd = ast(getLongest(a).length);
//     newArr = (startEnd + "\n");
//         for (j = 0; j < a.length; j++){
//         newArr += "* " + a[j] +" *\n";
//     };
//     newArr += (startEnd + "\n");
//       console.log(newArr);
//     return newArr;
// }
// var a = ["hello", 'world','this','is','Mihir', 'Patel'];
// rectFrame(a);

// ******************************
// A nor B
// ------------------------------
// function aNorB(s) {
//   var now = "";
//   var longest = "";

//   for (i = 0; i < s.length; i++) {
//     if (s[i] === "a" || s[i] === "b") {
//       if (now.length > longest.length) longest = now;
//       now = "";
//     } else {
//       now += s[i];
//       console.log(now);
//     }
//   }
//   return longest;
// }

// document.getElementById("hello").innerHTML = aNorB("abababcabcjdiehabcjs");

// *******************************
// Sorting methods
// -------------------------------
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//       for ( j = 0; j < arr.length - i -1; j++){
//         if(arr[j] > arr[j + 1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//       }
//   }

//   return arr;
// } // bubble sort

// function merge(left,right){
//     let arr = [];

//     // while there is a number in left AND right arr
//     while (left[0] && right[0]){

//         // remove with .shift() from start of array
//         // add with .push() to end of array
//         if(left[0] <right[0]){
//             arr.push(left.shift());
//         } else{
//             arr.push(right.shift());
//         }
//     }

//     // concatinate anything leftover
//     return [...arr, ...left,...right]
// }
// function mergeSort(a) {
//   const half = a.length / 2;
//   if(a.length < 2) return a;
//   const left = a.splice(0,half);
//   return merge(mergeSort(left), mergeSort(a));

// }

// const randomArr = Array(20).fill().map(() => Math.floor(Math.random() * 50) +1);
// console.log("Bubble Sort: \n", bubbleSort(randomArr));
// console.log("Merge Sort: \n", mergeSort(randomArr));

// ***********************************
// generate HTML Table
// -----------------------------------
// function genHTML() {
//   var myTableDiv = document.getElementById("myDynamicTable");
//   var table = document.createElement("TABLE");
//   var tableBody = document.createElement("TBODY");
//   var row = 3;
//   var col = 4;

//   table.border = "1";
//   table.appendChild(tableBody);

//   for (var i = 0; i < row; i++) {
//     var tr = document.createElement("TR");
//     tableBody.appendChild(tr);
//     for (var j = 0; j < col; j++) {
//       var td = document.createElement("TD");
//       td.appendChild(
//         document.createTextNode("Cell " + (i + 1) + "," + (j + 1))
//       );
//       tr.appendChild(td);
//     }
//   }
//   myTableDiv.append(table);
// }

// let arr = ['hello', 'world'];
// var obj = {
//   name: " h",
//   length: 1
// };
// var newArr = [];
// let na = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//         newArr.push({
//           name: arr[i],
//           length: arr[0].length
//         });
//   };
//   return newArr;
// }

// console.log(na);

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}
class savingAccount extends Account {
  constructor(interest) {
    super(interest);
    this.interest = interest;
  }
  getInterest() {
    return this.interest;
  }
}

class currentAccount extends Account {
  constructor(acountOf) {
    super(acountOf);
    this.cash_cred = acountOf.balance;
  }
  getBalance() {
    return this.cash_cred;
  }
}

let acc1 = new Account(1, "Alec", 1000);
let acc2 = new Account(2, "Mihir", 3000);
let currentAccount1 = new currentAccount(acc1);
let currentAccount2 = new currentAccount(acc2);
let savingAccount1 = new savingAccount(0.8);
let savingAccount2 = new savingAccount(0.5);

console.log(`$${currentAccount1.getBalance()} in ${acc1.name}'s account`);
console.log(`$${currentAccount2.getBalance()} in ${acc2.name}'s account`);
console.log(
  `${savingAccount1.getInterest()} intrest for ${acc1.name}'s account`
);
console.log(
  `${savingAccount2.getInterest()} intrest for ${acc2.name}'s account`
);
