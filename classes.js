class Students{
    
    constructor(n, age, add){
        this.name = n;
        this.age = age;
        this.address = add;
        console.log("constructor running...", this.name);
    }

    func(){
        console.log("function running...", this.name);
    }
}

var student1 = new Students('Muhammad Ali', 20, 'address1....');
console.log(student1);
console.log(student1.func());