const cities = ["İstanbul", "İzmir", "Ankara", "Erzurum"];
let numbers = [1,2,3,4,5,1,2,3,4,5];
let mix = ["Akın", 1, 3.14,true,{firsname : "Akın",lastname:"Cengiz"}, [4,5,6]];

//string[] cities = new String[4];
//string[] cities = ["İstanbul", "İzmir", "Ankara", "Erzurum"];
//string[] cities = new String[4];
//

console.log(cities);
console.log(numbers)
console.log(mix);

console.log(cities[3]);

// DİZİ METOTLARI
// push() => Dizinin sonuna yeni bir eleman ekler. Herhangi bir değer döndürmez.
cities.push("Çanakkale");
//let addedCity = cities.push("Çanakkale");
//console.log(addedCity);
console.log(cities);
mix.push("1615");
console.log(mix);
numbers.push(6);
console.log(numbers);

//pop() => Dizinin son elemanını siler ve silinen elemanı döner.
let deletedItem = numbers.pop();
console.log(deletedItem);
console.log(numbers);
let deletedCity = cities.pop();
console.log(deletedCity);
console.log(cities);

// shift() => Dizinin ilk elemanını siler ve silinen elemanı döner.
console.log(mix);
deletedItem = mix.shift();
console.log(deletedItem);
console.log(mix);

//unshift() => Dizinin başına yeni bir eleman ekler. Herhangi bir değer döndürmez.
console.log(cities);
cities.unshift("Sakarya");
console.log(cities);


//slice() => Dizinin belirli bir kısmını almamıza yarar
//slice(startIndex,endIndex) => startIndex değerinden başlayarak endIndex değerine kadar olan elemanları döner. endIndex değeri verilmezse index değerinden sonuna kadar elamnı döner.
numbers.push(7,8,9,10,11);//Push metodu aynı zamanda parametreleri verildikleri sırada dizinin sonuna ekler.
console.log(numbers);
let newNumbers = numbers.slice(3,5);
console.log(newNumbers);
newNumbers = numbers.slice(3);
console.log(newNumbers);


//reverse() => Reverse metodu verilen diziyi tersten sıralar. Reverse metodu diziyi tersine çevirerek geriye döner ancak orjinal dizi reverse metodundan sonra tersten sıralı bir duruma gelir.
let reverseArray = cities.reverse();
console.log(reverseArray);
console.log(cities);


//concat() => Concat metodu verilen iki diziyi birleştirerek geriye döner. Orjinal dizilerin değeri değişmez
let trakya = ["İstanbul","Tekirdağ","Edirne","Kırklareli"];
let anadolu = ["Kocaeli","Sakarya","Bursa","Balıkesir","Çanakkale"];
let theMarmara = trakya + anadolu;

let marmara = trakya.concat(anadolu);
console.log(marmara);
console.log(trakya);
console.log(anadolu);
console.log(theMarmara);

//indexOf => Aranan değerin ilk kez görüldüğü index değerini döndürür
//ve lastIndexOf() => Aranan değerin son kez görüldüğü index değerini döndürür
// Eleman bulunamazsa -1 değerini verir
console.log(numbers);
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));


let stringCities = marmara.join(", ");
console.log(stringCities);
stringCities = marmara.join(" ");
console.log(stringCities);
stringCities = marmara.join(" - ");
console.log(stringCities);
stringCities = marmara.join();
console.log(stringCities);
