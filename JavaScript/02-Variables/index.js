console.log("1. satır : ", firstname);
//console.log("2. satır : ", age);
//var anahtarıyla değişken tanımlanmaktadır.
var firstname = "Akın";
var lastname = "Cengiz";
var kdv = 0.18;
var year = 2024;
var isActive = false;
var isAdmin = true;
var numbers = [1,2,3,4,5];
var user = { name : "Akın", lastname : "Cengiz", city : "İstanbul"};


//Console.log(,) metoduna virgül ile ayrırarak birden fazla parametre gönderilebilir. Her parametrenin araasına bir boşluk bırakarak yazar
console.log(firstname, lastname);


//typeof() => Parametre ile gönderilen dğişkenin türünü verir
console.log(typeof(firstname),firstname);
console.log(typeof(lastname),lastname);
console.log(typeof(kdv),kdv);
console.log(typeof(year),year);
console.log(typeof(isActive),isActive);
console.log(typeof(isAdmin),isAdmin);
console.log(typeof(numbers),numbers);
console.log(typeof(user),user);


//let ve const
let age = 18;
console.log("Age : " +age);
age++;
console.log("Age : " +age);

const fullname = "Akın";
console.log("Fulname : "+ fullname);
//fullname = "Akın Cengiz";
console.log("Fulname : "+ fullname);

const cities = ["İstanbul", "Ankara", "İzmir"];
console.log(cities);
cities.push("Çanakkale");
console.log(cities);
var cities2 = ["İstanbul", "Ankara", "İzmir", "Çanakkale"];
//cities = cities2;
console.log(cities);
console.log(typeof(cities[0]),cities[0]);

let numberVariable = 15;
console.log("numberVariable : ");
console.log(numberVariable);
numberVariable = "İstanbul";
console.log("numberVariable : ");
console.log(numberVariable);
numberVariable = true;
console.log("numberVariable : ");
console.log(numberVariable);
numberVariable = 3.14;
console.log("numberVariable : ");
console.log(numberVariable);
numberVariable = [ 1,2,3,4,5];
console.log("numberVariable : ");
console.log(numberVariable);
numberVariable = { firstname : "Akın", lastname : "Cengiz"};
console.log("numberVariable : ");
console.log(numberVariable);
