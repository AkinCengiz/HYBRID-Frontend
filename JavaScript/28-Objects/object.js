function User(){
    this.firstname = "Akın";
    this.lastname = "Cengiz";
    this.getMyInfo = function(){
        console.log(this.firstname,this.lastname);
    }
}



const user1 = new User();
user1.firstname = "Ayşe";
user1.city = "İstanbul";

// user1.getMyInfo();
// console.log(user1.city);


// user2.phone = "123 456 78 90";
// console.log(user2.phone);

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getMyInfo(){
        console.log(this.firstname, this.lastname);
    }
}
Person.prototype.getFirstName = function(){
    return "İsim : " + this.firstname;
}

const person = new Person("Akın","Cengiz");
console.log(person);
const employee = new Person("Hüseyin","Çiçek");
console.log(employee);
employee.salary = 15000;
employee.city = "İstanbul";
console.log(employee);
employee.getMyInfo();


console.log(employee.getFirstName())

Person.prototype.getLastname = function(){
    console.log("Soyisim : ", this.lastname)
}

employee.getLastname();

person.getLastname();

function Product(name,price,category,stock){
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock
};

const product = new Product("Laptop",15000,"Bilgisayar",15);
const p1 = new Product();
p1.name = "Iphone";
p1.price = 20000;
console.log("Fiyat : ", p1.price);
console.log(product.name);


Product.prototype.getMyInfo = function(){
    console.log(this.name,this.category, this.stock,this.price);
}
product.getMyInfo();

Product.prototype.tax = 0.20;

console.log("Tax : ",product.tax);

console.log(product);
console.log(p1);

product.name = "Samsung";
product.category = "Smart Phone";

product.getMyInfo();

const hpLaptop = new Product();

//PROTOTYPE

function Customer(firstname,lastname,balance){
    this.firstname = firstname;
    this.lastname = lastname;
    this.balance = balance;
    this.getInfo = function(){
        console.log("Firstname : ",this.firstname,"Lastname : ",this.lastname,"Balance : ",this.balance);
    }
    this.toString = function(){
        return "Customer objesine ait toString() metodu çalıştı.";
    }
}

function Employee(firstname,lastname,salary){
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
}
Employee.prototype.getInfo = function(){
    console.log("Firstname : ",this.firstname,"Lastname : ",this.lastname,"Balance : ",this.salary);
}
Employee.prototype.toString = function(){
    return "Customer objesine ait toString() metodu çalıştı.";
}

const customer1 = new Customer("Akın","Cengiz",15000);
const customer2 = new Customer("Bilal","Kayhan",25000);

console.log(customer1);
console.log(customer2);

console.log(customer1.toString());
console.log(customer2.toString());
//console.log(customer1.sallametotismi());

const employee1 = new Employee("Mehmet","Albayrak",15000);
const employee2 = new Employee("Simay","Seyman",25000);
console.log(employee1);
console.log(employee2);


customer1.getInfo();
customer2.getInfo();
employee1.getInfo();
employee2.getInfo();
console.log(person);