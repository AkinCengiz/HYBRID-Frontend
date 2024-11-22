let date = new Date();
let date2 = new Date(2024,7,30,19,3,15,152);

console.log(date);
console.log(date2);
// getDay => Haftanın kaçıncı günü olduğu bilgisini döner. Index 0 dan başlar ve haftanın ilk günü pazar olarak kabul edilir.
let day = date.getDay();
console.log(day);

switch(day){
    case 0 : 
        console.log("Pazar");
        break;
    case 1 : 
        console.log("Pazartesi");
        break;
    case 2 : 
        console.log("Salı");
        break;
    case 3 : 
        console.log("Çarşamba");
        break;
    case 4 : 
        console.log("Perşembe");
        break;
    case 5 : 
        console.log("Cuma");
        break;
    case 6 : 
        console.log("Cumartesi");
        break;
    default : 
        console.log("Yanlış gün bilgisi...");
        break;
}
//getFullYear() => Tarih değişkeninin yıl bilgisini verir.
let result = date.getFullYear();
console.log("Get Full Year Metodu : " + result);


//getDate() => Tarih değişkeninde ayın kaçıncı günü olduğu bilgisini döner..
result = date.getDate();
console.log("Get Date Metodu : " + result);

//setDate() => Tarih değişkeninde gün bilgisine değer atamak için kullanılır.
date.setDate(10);
console.log(date);

//getMonth() => Tarih değişkeninde ay bilgisinin index değerini getirir.
result = date.getMonth();
console.log("Get Month Metodu : " + result);
//setMonnth() => Tarih değişkeninde ay bilgisine değer atamak için kullanılır.
date.setMonth(7);
console.log(date);


//getHours() => Tarih değişkeninde saat bilgisinin değerini getirir.
result = date.getHours();
console.log("Get Hours Metodu : " + result);
//setMonnth() => Tarih değişkeninde saat bilgisine değer atamak için kullanılır.
date.setHours(23);
console.log(date);


//getMinutes() => Tarih değişkeninde dakika bilgisinin değerini getirir.
result = date.getMinutes();
console.log("Get Minutes Metodu : " + result);
//setMonnth() => Tarih değişkeninde dakika bilgisine değer atamak için kullanılır.
date.setMinutes(23);
console.log(date);


//1 ocak 1970 ten bu tarihe kadar olan milisaniye değerini döndürür.
result = date.getTime();
console.log("Get Time Metodu : " + result);

let now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.toLocaleDateString());
console.log(now.toTimeString());
console.log(now.toLocaleTimeString());