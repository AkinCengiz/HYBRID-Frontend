let firstname = "Akın";
let lastname = "Cengiz";
let email = "akincengiz@msn.com";


//indexOf metodu parametre olarak verilen değerin ilk görüldüğü indeksi döndürür. Elemen bulunamazsa -1 değerini döndürür.

let deneme = firstname.indexOf("n");
console.log(deneme);
deneme = firstname.indexOf("c");
console.log(deneme);

//Stringin verilen indexteki değerini çekme
console.log(lastname[0]);


//parametre olarak verilen stringin kaç karakter olduğunu verir
console.log(email.length);

console.log(firstname.toUpperCase());
console.log("Değişkene atama yapıldıktan önce : " + firstname)
firstname = firstname.toLocaleUpperCase();
console.log("Değişkene atama yapıldıktan sonra : " + firstname);
firstname = firstname.toLocaleLowerCase();
console.log(firstname);

let sentence = "parametre olarak verilen stringin kaç karakter olduğunu verir";
console.log(sentence.indexOf("n"));
console.log(sentence.lastIndexOf("n"));


//Slice metodu ilk parametrede belirtilen indexten başlayarak ikinci belirtilen parametredeki indexe kadar olan değeri döner. İkinci parametre verilmemişse ilk parametrede verilen indexten başlayarak stringin sonuna kadar olan kısmı döndürür.
let sliceText = sentence.slice(15,12);
console.log("---"+sentence + "\n" + sliceText);
sliceText = sentence.slice(11);
console.log(sliceText);
sliceText = sentence.slice(-11);
console.log(sliceText);

let subText = sentence.substring(5,12);
console.log(subText);
subText = sentence.substring(11);
console.log(subText);

let text = "İstanbul Eğitim Akademi";
//replace => ilk parametrede verilen değerin ilk görüldüğü indexteki değerini ikinci parametrede verilen değer ile değiştirir
console.log(text.replace(" ","-"));
//replaceAll => ilk parametrede verilen değere karşılık gelen değerleri ikinci parametrede verilen değer ile değiştirir
console.log(text.replaceAll(" ","-"));

let content = "cocuk henüz beş yaşındaydı";
console.log(content.replaceAll("c","ç"));

text = "İstanbul Eğitim Akademi Yazılım Mühendisliği Yetiştirme Programı";
// split() => Stringi metoda parametre ile verilen değerlerden bölerek her parçayı dizi elemanı olarak bir diziye ekler ve diziyi döner
let result = text.split(" ");
console.log(result);
console.log("Kelime sayısı : " + result.length);

//trim() => String değişkenin başındaki ve sonundaki boşlukları siler.

const trimName = "   Akın         ";
const trimLastname = "        Cengiz        ";
console.log(trimName,trimLastname);
console.log(trimName.trim() + trimLastname.trim());
//trimEnd() => Stringin sağ tarafındaki boşlukları kaldırır, trimStart() => Stringin sol tarafındaki boşlukları kaldırır.
console.log(trimName.trimEnd(), trimLastname.trimStart());

//padEnd ve padStart
//padStart() => String uzunluğunu belirtilen bir kkarakter ile istenilen sayıya tamamlar
console.log(firstname.padEnd(10,"*"));
console.log(lastname.padStart(15,"+"));
console.log("İsim      : "+firstname);
console.log("Soyisim   : "+lastname);
console.log("İsim".padEnd(10," ")+": "+firstname);
console.log("Soyisim".padEnd(10," ")+": "+lastname);

//includes() => parametre olarak gönderilen değerin string içerisin olup olmadığını kontrol eder.
console.log(text.includes("Eğitim"));
console.log(text.includes("kurs"));

//startsWith() => Stringin parametrede verilen değer ile başlayıp başlamadığını kontrol eder.
console.log(text.startsWith("İst"));
console.log(text.startsWith("Eğt"));
//endWith() => Stringin parametrede verilen değer ile bitip bitmediğini kontrol eder.
console.log("EndsWith : " + text.endsWith("Programı"));
console.log("EndsWith : " + text.toLocaleLowerCase().endsWith("programı".toLocaleLowerCase()));

console.log(text.toLocaleLowerCase().startsWith("İst".toLocaleLowerCase()));

//DEĞER DÖNDÜREN METOT
// function topla(){
//     return 5+9;
// }
//DEĞER DÖNDÜRMEYEN METOT
// function yaz(){
//     console.log("Yazıldı.")
// }

// let degerDonduren = topla();
// let yazdiran = yaz();

// console.log(degerDonduren);
// console.log(yazdiran);

