const colors = new Map();


//SET Map değişkeni üzerine eleman ekler parametre olarak ilk parametre key değerini, ikinci parametre value değerini tutar
colors.set("Red","Kırmızı");
colors.set("White","Beyaz");
colors.set("Black","Siyah");
colors.set("Blue","Mavi");
colors.set(1,15);
colors.set(true,"Doğru");
colors.set(15);
colors.set(15,25);

console.log(colors);
//Delete Map değişkeni üzerinde parametre olarak verilen key  değerindeki key-value veri çiftini siler
colors.delete(1);
colors.delete(5);


//Has => Map değişkeni üzerinde parametre ile verilen key değerine ait key-value çiftinin olup olmadığını kontrol eder. Varsa true yoksa false döner
console.log(colors.has(1));
console.log(colors.has("Red"));

//Get => Map değişkeni üzerinde parametre olarak verilen key değerine karşılık gelen value değerini döner
let value = colors.get("Blue");
value = colors.get(true);
console.log(value);


console.log(colors);
//Keys => Map nesnesinin key değerlerini döner
console.log(colors.keys());
//Values => Map nesnesinin value değerlerini döner
console.log(colors.values());

//Entries => Map nesnesinin key-value çiflerini döner
console.log(colors.entries());

colors.forEach((color,key) => {
    console.log(key,color);
})


console.log("For Of")
for(let color of colors){
    console.log(color);
}
for(let color of colors.keys()){
    console.log(color);
}
for(let color of colors.values()){
    console.log(color);
}
for(let [key,value] of colors.entries()){
    console.log(key,value);
}

console.log(colors.size);
//clear => map nesnesindeki elemanları temizler.
colors.clear();
console.log(colors);