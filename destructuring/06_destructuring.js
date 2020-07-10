let numbers = [1,2,3];
// destructuring array with variables
let [a='default', b, c, d='default'] = numbers;
console.log(a, b, c, d); 

// using rest operator to extract array part
numbers = [1,2,3,4,5];
let [x, , ...z] = numbers;
console.log(x, z);

// swaping values
let i = 5; let j = 10;
[i, j] = [j, i];
console.log(i, j);

// destructuring objects
let obj = {
    name : "Anas",
    age : 26,
    greet : function () {
        console.log("Hi, there!");
    }
}           // alias for greet
let {name, greet: hello} = obj;
console.log(name);
hello(); // now greet won't work & through error because of elias


