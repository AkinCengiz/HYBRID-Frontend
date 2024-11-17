let age = 18;
const PI = 3.14;

console.log(age,typeof(age), PI, typeof(PI));


let uzunKenar = 5;
let kisaKenar = 12;
let derinlik = 7;

var definedValue = 15;
console.log("DefinedValue : " + definedValue);

var definedValue = "Akın";
console.log("DefinedValue : " + definedValue);


let radius = 10;
let area = PI * radius**2;
console.log("Area : " + area);
console.log("Area : ", area);
console.log(123, 654, 789, "Akın","Cengiz", true);

//ARİTMETİK OPERATÖRLER
let numberOne = 7;
let numberTwo = 5;

// (+) Operatörü => Toplama işlemi
let result = numberOne + numberTwo;

// (-) Operatörü => Çıkarma İşlemi
result = numberOne - numberTwo;

// (*) Operatörü => Çıkarma İşlemi
result = numberOne * numberTwo;


// (/)Operatörü => Bölme İşlemi
result = numberOne / numberTwo;

// (%)Operatörü => Mod Alma İşlemi
result = numberOne % numberTwo;


// (++) Operatörü => 1 arttır
result = result + 1;
result++;
// (--) Operatörü => 1 azaltır
result = 10;
result = result - 1;
result--;

result = 10;
// (+=) Operatörü =>  sol taraftaki değişkenin değerini sağ taraftaki değer ile toplar ve sonucu sol tarafta bulunan değişkene atar
result += 10; // Result değişkeninin değerini 10 arrtırır
// (-=) Operatörü =>  sol taraftaki değişkenin değerinden sağ taraftaki değeri çıkarır ve sonucu sol tarafta bulunan değişkene atar
result -= 10; // Result değişkeninin değerini 10 azaltır
// (*=) Operatörü =>  sol taraftaki değişkenin değerini sağ taraftaki değer ile çarpar ve sonucu sol tarafta bulunan değişkene atar
result *= 10; // Result değişkeninin değerini 10 katı yapar
// (/=) Operatörü =>  sol taraftaki değişkenin değerini sağ taraftaki değer ile böler ve sonucu sol tarafta bulunan değişkene atar
result /= 10; // Result değişkeninin değerini 10 a böler
// (%=) Operatörü =>  sol taraftaki değişkenin değerini sağ taraftaki değer ile böler ve kalanı sol tarafta bulunan değişkene atar

result %= 4; // Result değişkeninin değerini 4 e böler ve kalan değeri result değişkenine atar.


let number1 = "15";
let number2 = "7";
let firstName = "Akın";
result = number1 + number2;
number1 = 15;
result = number1 + number2;

result = number1 * number2;

result = number1 * firstName;




console.log("Result : " + result);