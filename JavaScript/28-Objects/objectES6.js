class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFirstname(){
        console.log("Firstname : " + this.firstname);
    }
    getLastname(){
        console.log("Lastname : " + this.lastname)
    }
    getFullname(){
        return this.firstname + " " + this.lastname;
    }
    toString(){
        return "Person sınıfı : " + this.firstname + " " + this.lastname;
    }
}

const person1 = new Person("Akın","Cengiz");
console.log(person1);

person1.getFirstname();
person1.getLastname();
console.log(person1.getFullname());
const fullname = person1.getFullname();
console.log("Fullname değişkeni : " + fullname);

class Employee extends Person{
    constructor(firstname,lastname,salary){
        super(firstname,lastname);
        this.salary = salary;
    }
    getFullname(){
        console.log(this.firstname + " " + this.lastname);
    }
    getSalary(){
        console.log("Salary : " + this.salary);
    }
    toString(){
        return "Employee sınıfı : " + this.firstname + " " + this.lastname;
    }
}

const employee1 = new Employee("Sergen","Yalçın",20000);
console.log(employee1);
//console.log(employee1.getFullname());
employee1.getFullname();
employee1.getSalary();
console.log(employee1.toString());
//console.log(employee1);