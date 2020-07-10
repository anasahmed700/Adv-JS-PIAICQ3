var one = document.querySelector('.one');
var two = document.querySelector('.two');

one.addEventListener('click', callThis);
two.addEventListener('click', callThis);

function callThis(){
    console.log('inside1', this);
    var _this = this; // copying reference of this to access this object in other function scope
    setTimeout(function(){
        console.log('inside2', this);

        _this.innerText = "Anas";
    }, 2000);
}
console.log('outside', this);

// adding prototypes to the function/constructor
function User(){
    this.age = 24;
    this.city = "Karachi";
}
User.prototype.name = "Anas";
User.prototype.add = function(a, b){
    return a + b;
};
var user1 = new User();
var user2 = new User();
// user1.name = "Anas";
console.log(user1);
console.log(user1.name);
console.log(user2);
console.log(user2.name);

// inheritance prototype
function Company(){ // parent 
    this.companyName = "PC";
}
Company.prototype.country = 'Pakistan';
Company.prototype.city = 'Karachi';

function User(){ // child 
    Company.call(this); 
    this.userName = "Anas";
}
User.prototype = Object.create(Company.prototype);
User.constructor = User;
var company = new Company();
var user = new User();
console.log(company);
console.log(user);


// synchronous & asynchronous
console.log("starting");

setTimeout(() => {
    console.log('running');
}, 3000);

console.log('ending');