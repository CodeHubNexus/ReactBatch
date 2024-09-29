// // console.log(centerName);
// // printName();
// var centerName = "codehub Nexus";
// console.log(centerName);
// printName();

// // function Declaration
// function printName() {
//   console.log("my center name is " + centerName);
// }
// console.log(printName);

// // function invocation
// printName();
// console.log(centerName);
// let centerName = "codehub Nexus";
// console.log(centerName);
// printName();
// // 1. function declaration
// function printName() {
//   console.log("Hello from Function declaration");
// }
// printName();
// // function expression
// printNames();
// let printNames = function () {
//   console.log("Hello from Function expressionj");
// };
// printNames();

// let names = () => {
//   console.log("Hello from arrow function");
// };

// names();

// let a = "name";
// a = 23;

// const b = "hello";
// b = 90;
// const arr = [1, 2];
// const arr1 = [1, 2];
// console.log(arr);
// console.log(arr[1] === arr1[1]);

// console.log(2 === "2");

// console.log(2 + 4);
// console.log("2" + 4);
// console.log("2" * 4);
// console.log("2" - 4);
// console.log("4" / 2);

// function a(qw) {
//   console.log(qw);
// }

// a(23);

function mul(a, b, c) {
  return a * b * c;
}

const aa = mul(1, 2, 3);
console.log(aa);

// currying
function add(a) {
  return function () {
    return function (c) {
      return a + c;
    };
  };
}
const addedValue = add(1)(5)(3);
console.log(addedValue);
let a = add(1)();
console.log(a);

let b = a(2);
console.log(b);

// let c = b(3);
// console.log(c);
