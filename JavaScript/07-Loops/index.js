/**
* LOOPS => DÖNGÜLER
* 
* WHILE LOOPS => While Döngüsü
* 
*   while(koşul){
*   Koşul sağlandığı sürece çalıştırılacak kodlar
*   };
* 
* 
* 
* DO-WHILE LOOPS => Do-While Döngüsü
* 
*   do{
*   Koşul sağlandığı sürece çalıştırılacak kodlar
*   }while(koşul);
* 
* 
* FOR LOOPS => For Döngüsü
*  
* 
*   let start = 1;
*   let end = 10;
*   let total = 0;


 *   while(start <= end){
 *      Koşul sağlandığı sürece çalıştırılacak kodlar
 *      start++;
 *   };
 * 
 *    for(başlangıç değişkeni ve değeri tanımla; koşul; başlangıç değerine yeni değer atama)
 *   
 *  for( ; start <= end ; ){
 *      Koşul sağlandığı sürece çalıştırılacak kodlar
 *      start++;
 * }
 * for( ; ; ){
 * 
 * }
 * 
 * 
 * 
 * for(lat start = 1; start <= end; start++ ){
 * 
 * 
 *  }
 * 
 */

let start = 1;
let end = 10;
let total = 0;

while (start <= end) {
  console.log("Total : " + total + " + " + start);
  total += start;
  start++;
}
console.log(total, start);

start = 1;
total = 0;
//end => 10

do {
  console.log("while Loop => Total : " + total + " + " + start); // Total : 0 + 1
  total += start; // 1
  start++; //2
} while (start > end);

console.log(total, start); //1 2

start = 1;
total = 0;
//end => 10

do {
  console.log("do-while Loop => Total : " + total + " + " + start);
  total += start;
  start++;
} while (start <= end);

console.log(total, start);

start = 1;
total = 0;
for (; start <= 10; ) {
  console.log("For Loop => Total : " + total + " + " + start);
  total += start;
  start++;
}
console.log(total, start);
total = 0;
let strGlobal;
for (let str = 1; str <= 10; strGlobal = ++str) {
  console.log(
    `For Loop String Literal => Total : ${total} + ${str} = ${(total += str)}`
  );
} ////////////
console.log(total, strGlobal);

//CONTINUE and BREAK
// Döngülerde mevcut iterasyonu atlamak ya da döngüyü sonlandırmak için kullanılırlar
for (let i = 0; i < 100; i++) {
  if (i % 5 == "0") {
    continue;
  }
  console.log("i : " + i);
  
  if (i % 7 === 0 && i % 11 === 0) {
    break;
  }
}

//

//("5"==5) ? console.log("Eşit") : console.log("Eşit değil");

//&& || ------------------ &  

//Ve koşulu => iki koşulunda sağlandığı durumlarda true diğer durumlarda false => ve koşulunda bütün koşullar doğğru olmalıdır.
//veya ==> iki koşulunda sağlanmadığı durumlarda false diğer durumlarda true

// if(a > b & b > c) => 0&0 - 0&1 => true değeri için soldaki koşul ve sağdaki koşulun her ikiside doğru değer vermelidir.
// 0&0 0&1 1&0 değerlerinde 0 yani false 1&1 değerlerinde 1 yani true döner

/******************* if(a > b && b > c && c > d && d > e && e > f) => 0 *************************

// değerlerden bir tanesi bile true değer dönüyorsa true sonuç verir sadece bütün değerler 0 false dönderse sonuç false olur 
// if(a > b | b > c)
// if(a > b || b > c || c > d || d > e)

//if((a>b || b>c) && (e < d || f < e)) */



let result = ((10 < 5 || 4 > 2) && 15 > 7); //(0 & 1 & 1) => 0 false
console.log("Result : " + result);
