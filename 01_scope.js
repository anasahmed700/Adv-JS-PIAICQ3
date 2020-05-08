// 1: Backtic
var name = "Anas Ahmed";
var father = "Shoaib Ahmed";

var msg = `My name is ${name}
My father name is ${father}`;

console.log(msg);

// 2: scope (Global, local, function & block)
// function scope (var) can be accessable outside the block but not function
if(true){
    var company = "Panacloud";
    let company2 = "Panacloud";
}
console.log(company);

// block scope (let or const) can't be accessable from outside of its block
// console.log(company2);

var myname = "Anas";
function add(){
    if(myname === "Anas"){
        var age = 27;
        let weight = 60;
        const MYFATHER = "Shoaib Ahmed";

        console.log(age, weight, MYFATHER);
    }
    console.log("var can be used in parent scope within function:", age);
    // console.log("let or const can't be accessable because their scope remains within a block:", weight);
    // console.log(MYFATHER);
}
// var can't be accessable from outside the fuction  
// console.log(age);
add(); 


