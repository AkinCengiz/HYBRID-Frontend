function welcome(){
    console.log("Hello JavaScript...");
}

welcome();
welcome();

const cities = ["İstanbul","İzmir","Ankara"];

function addCity(city){
    cities.push(city);
    console.log("City added...")
}

addCity("Çanakkale");
addCity("Sakarya");
console.log(cities);
//console.log(deneme)
// function print(){
//     console.log("Ürün eklendi....")
// }

console.log("******************")
function added(number1,number2){
    return number1 + number2;
}

function printAdded(number1,number2,total){
    console.log(`${number1} + ${number2} = ${total}`);
}

function added2(number1,number2){
    let result = number1 + number2;
    console.log(`${number1} + ${number2} = ${number1 + number2}`);
    return result;
}
let num1 = 2;
let num2 = 3;
let metotResult = added(num1,num2);
printAdded(num1,num2,metotResult);

// let total = added(2,3);
// console.log("Total = " + total);
// let total2 = added2(2,3);
// console.log("Total2 = " + total);
// console.log("Result = " + added(2,3));

let firstname = "Akın";
let lastname = "Cengiz";
let hosting = "iea.com";


//firstname değişkeninin ilk harfini ile lastname değişkeninin değerini birleştirerek sonuna @ ve hosting değerini getirip email adresi oluşturan fonksiyon

//acengiz@iea.com

function createEmailAddress(firstname,lastname = "",hosting = ""){
    // let email = firstname[0].toLowerCase()+lastname.toLowerCase()+"@"+hosting;
    let email = `${firstname[0].toLowerCase()}${lastname.toLowerCase()}@${hosting}`;
    //console.log(email);
    return email;
}
function generateEmailAddress(firstname,lastname = "",hosting = "yazilim.com"){
    return `${firstname[0].toLowerCase()}${lastname.toLowerCase()}@${hosting}`;
}

let email = createEmailAddress(firstname,lastname,hosting);
console.log(email);
email = generateEmailAddress(firstname,lastname);
console.log(email);
email = generateEmailAddress(firstname,lastname,hosting);
console.log(email);

//akincengiz@istanbulegitim.com  mail adresinin hosting kısmını döndüren fonksiyon

function getHosting(email){
    // let indexValue = email.search("@");
    // let hosting = email.slice(indexValue+1);
    // console.log(hosting);

    return email.slice(email.search("@") + 1);
}

const getArrowHosting = (email) => {
    return email.slice(email.search("@") + 1);
}

const getArrowHosting2 = email => {
    return email.slice(email.search("@") + 1);
}
const arrowDeneme = () => "Deneme";



console.log("**********",email)
console.log(getHosting(email));

console.log("Arrow Metot : ", getArrowHosting("akincengiz@msn.com"))




//RECURSIVE FUNCTION

function factorial(number){
    if(number === 1){
        return 1;
    }

    return number * factorial(number - 1);
}

let result = factorial(3);
console.log("Factorial : ", result);

const multiplyNumber = (number1, number2) => number1 * number2;

console.log("Multiply : ", multiplyNumber(3,7))

console.log((() => {
    return 2 + 5;
})());