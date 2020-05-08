// var getValue = prompt("Pass the object key to get it's value to console!");
var getValue = "newValue";
var myObj = {
    age : 25,
    name : "Anas",
    height : 5.7
};
myObj.newKey = getValue;
console.log(myObj);

// difference between variables and objects
var name1 = "danyal";
function doStuff(name){
    name1 = "tariq";
    console.log(name);
}
doStuff(name1);
console.log("here name1 is updated when doStuff() was called:", name1);

console.log("Creating new object 'obj'");
var obj = {name: "Anas"};
function callObj(name){
    obj = "Ahmed";
    console.log(name);
}
var obj1 = {
    name: "Anas",
    age : 30,
    swim: false
};
callObj(obj);
console.log(obj);
console.log("obj1 keys & values:");
console.log("keys", Object.keys(obj1));
console.log("values", Object.values(obj1));


// constructor
console.log("constructors...");
function Students(n, age, add){
    this.name = n;
    this.age = age;
    this.address = add;
    this.func = function(){
        console.log('running function...', this.name, '\n');
    };
}

var student1 = new Students("Anas Ahmed", 26, 'address1....');
var student2 = new Students("Ansar Ahmed", 30, 'address2....');
console.log("new object student1 is:", student1);
student1.func();
console.log("new object student2 is:", student2);

console.log("Creating object with existing variables...");
let name = "Umar";
let ageField = "age";
let new_obj = {
    name,
    [ageField]: 24,// using variable value as key(age)
    // function name as string
    "greet user"(){
        console.log(this.name + ", " + this.age);
    }
};  // calling string function name
new_obj["greet user"]();// same as obj.fn()
console.log(new_obj.age);// or
console.log(new_obj[ageField]);
