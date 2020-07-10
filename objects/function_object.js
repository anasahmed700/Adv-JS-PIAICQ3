// creating function constructor
const Person = function(name, yob, job){
    this.name = name;
    this.yearOfBirth = yob;
    this.job = job;
}
// adding prototype method to function constructor
Person.prototype.get_age = function(){
    let current_year = new Date().getFullYear()
    return current_year - this.yearOfBirth;
    
}
// adding prototype property to function constructor
Person.prototype.lastname = 'Ahmed'

let person1 = new Person('Anas', 1993, 'Programmer')
person1.get_age()

let person2 = new Person('Ansar', 1989, 'Engineer')
console.log(`Person# 02 is ${person2.name} ${person2.lastname} a ${person2.get_age()} years
old ${person2.job}`)