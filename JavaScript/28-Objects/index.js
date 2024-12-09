function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.getInfo = function(){
    console.log("Name : ", this.firstname, "- Surname : ", this.lastname);
}
Person.prototype.getFullname = function(){
    return this.firstname + " " + this.lastname.toLocaleUpperCase();
} 
Person.prototype.toStringg = function(){
    return "Person sınıfına ait toString() metodu çağırıldı."
}
// const person1 = new Person("Akın","Cengiz");
// console.log(person1.getFullname());

const supObject = {
    marka : "Toog",
    model : 2024,
    getInfo : function(){
        console.log("Marka : ",this.marka, "- Model : ",this.model);
    }
}

const subObject = Object.create(supObject);
console.log(subObject.marka);
subObject.color = "Red";
subObject.hp = 100;

console.log(subObject);

// function Employee(){

// }

const person1 = new Person("Persone Name","Person Surname");

function Employee(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.getName = function(){
    console.log(this.firstname);
}
Employee.prototype.getFullname = function(){
    return this.lastname;
}
const employee1 = new Employee("Employee Name","Employee Surname");
console.log(employee1);
console.log(person1);

employee1.getInfo();
employee1.getName();

console.log(employee1.lastname);
console.log(employee1.getFullname());

console.log(employee1);

console.log(employee1.toString());