// ------ objects -------
// objects have composite or reference data type and its elements are mutable 
var obj1 = {
    name: "Anas",
    age : 30,
    swim: false
};
var obj2 = {
    name: "Ahmed",
    age : 40,
    swim: true
};

console.log("obj1 is", obj1);
console.log("obj2 is", obj2);
if(obj1 === obj2){
console.log("objects have reference");
} else{
    console.log("objects hav'nt reference");
}
console.log("passing refence to the objects");
obj1 = obj2; // passing reference obj2 to obj1
console.log("after passing reference obj2 to obj1: Obj1 is", obj1, "& obj2 is", obj2);
console.log("updating value of age = 55 in obj1");
obj1.age = 55;
console.log("lets check 'age' value in 'obj1'");
console.log("obj1 age is", obj1.age);
console.log("as objects are mutable so 'obj2' age value will also be updated with 'obj1'");
console.log("obj2 age is", obj2.age);

console.log("Breaking reference:");
// obj1 = Object.assign({}, obj2); // old method to break reference
obj1 = { ...obj2 }; // spread operator ... to break reference
console.log("obj2 key:value", obj2);
console.log(obj1);
console.log("Changing values in obj1");
obj1.age = 50; obj1.name = "Ali"; obj1.swim = false;
console.log("obj1 is", obj1);
console.log("obj2 is", obj2);
// passing more than one spread operator
var obj3 = { ...obj1, ...obj2 }; 
console.log("obj3 is", obj3); // take precedance of last obj and assign obj2 values to obj3 with reference break

console.log("Freezing obj1 and referencing it to new obj4...");
var obj4 = Object.freeze(obj1); // to freez the object
console.log("obj4 is", obj4);
console.log("Trying to change values of obj1 & obj4...");
obj1.age = 60;
obj4.age = 70;
console.log("obj1 is", obj1);
console.log("obj4 is", obj4);
console.log("The freezed object values can't be changed!");


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

var obj = {name: "Anas"};
function callObj(name){
    obj = "Ahmed";
    console.log(name);
}
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
