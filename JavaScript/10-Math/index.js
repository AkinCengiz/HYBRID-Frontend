//MATH OBJECTS


let number = 5;
const PI = 3.14;

console.log(Math.PI);//Math.PI Math objesinin PI sabit değerini verir
console.log(Math.E);//Math.E Math objesinin Euler sabit değerini verir
console.log(Math.LN10);//Math objesinin logaritma e tabanında 10 değerini döndürür. Sabittir.

//TRIGONOMETRIC METHODS
console.log(Math.sin(2));
console.log(Math.cos(2));
console.log(Math.tan(2));
console.log(Math.cosh(2));
// console.log(Math.asin(2,10));
// console.log(Math.acos(2,15));

//SIK KULLANILAN METOTLAR

number = 16;
let result = Math.sqrt(number); //Math.sqrt(a) => a sayısının karekökünü döner
console.log(`Karekök ${number} = ${result} `);
number = 27;
result = Math.cbrt(number);
console.log(`${number} sayısının küp kökü = ${result}`);
number = result;
result = Math.pow(number,2);
console.log(`${number} sayısının 2. kuvveti = ${result} `);
number = 2;
result = Math.pow(number,5);
console.log(`${number} sayısının 5. kuvveti = ${result} `);//Math.pow(a,b) => ilk parametrenin (a parametresinin) ikinci parametrede (b parametresi) belirtilen kuvvetini döner.

console.log(Math.abs(number));
number = -5;
console.log(Math.abs(number));

//Math.ceil() => parametre içerisindeki sayıyı kendisinden sonra gelen tamsayı değerine yuvarlar.
result = Math.ceil(9.458);
console.log(result);
result = Math.ceil(9.4);
console.log(result);
//Math.floor() => parametre içerisindeki sayıyı kendisinden önce gelen tamsayı değerine yuvarlar. Virgülden sonraki kısmını atar tam kısmı kalır 
result = Math.floor(9.658);
console.log(result);
result = Math.floor(9.4);
console.log(result);
//Math.round() => parametre içerisindeki sayıyı kendisine en yakın  tamsayı değerine yuvarlar. virgülden sonraki kısım 5 ve daha üzeri bir değerler başlıyorsa yukarı 5ten küçük bir değerle başlıyorsa aşağı yuvarlar
result = Math.round(9.499);
console.log(result);
result = Math.round(9.500);
console.log(result);


//Math.max(a,b) => Verilen parametreler içerisinde en büyük değeri döndürür
result = Math.max(3,5);
console.log(`Max değer = ${result}`);
result = Math.max(3,5,1,9,15,21,7,2,23);
console.log(`Max değer = ${result}`);
//Math.min(a,b) => Verilen parametreler içerisinde en küçük değeri döndürür
result = Math.min(3,5);
console.log(`Min değer = ${result}`);
result = Math.min(3,5,1,9,15,21,7,2,23);
console.log(`Min değer = ${result}`);

//Math.random() => 0 ile 1 arasında rastgele sayı üretir. 0,00,05 0,01,5956565456
console.log(Math.random());

result = Math.ceil(Math.random()*100);
console.log(`1 - 100 arası rastgele sayı değeri : ${result}`);
console.log("Deneme " + Math.ceil(Math.random()*100))
//alert("Deneme " + Math.ceil(Math.random()*100))
const body = document.getElementById("body");
body.innerHTML = Math.ceil(Math.random()*100);


function betweenOneAndHundred(){
    return Math.ceil(Math.random()*100);
}

console.log("Kendi fonksiyonum : " + betweenOneAndHundred());