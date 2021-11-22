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
function ast(len){
    var startEnd = "";
    for (i = 0; i < len; i++){
        startEnd += "* ";
    }
    return startEnd;
}

function getLongest(arr){
    return arr.reduce((x,b) => x.length < b.length ? b : x, "");
}
 
function rectFrame(a){
    var newArr = "";
    var startEnd = ast(getLongest(a).length);
    newArr = (startEnd + "\n");
    for (j = 0; j < a.length; j++){
        newArr += "* " + a[j] +" *\n";
    };
    newArr += (startEnd + "\n");
    console.log(newArr);
    return newArr;
}
var a = ["hello", 'world','this','is','Mihir', 'Patel'];
rectFrame(a);
