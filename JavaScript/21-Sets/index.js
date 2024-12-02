const mySet = new Set();


//add => Set nesnesine parametre olarak verilen elemanı ekler.
mySet.add(1);
mySet.add(5);
mySet.add("Akın");
mySet.add(true);
mySet.add(1.5);

mySet.add(5);

//delete => Set nesnesi üzerinde parametre olarak verilen değer varsa siler.
mySet.delete(1);
mySet.delete(15);


//has => Set nesnesi üzerinde parametre olarak verilen değerin olup olmadığı bilgisini döner
let result = mySet.has("Akın");
result = mySet.has("Cengiz");


//entries => Set nesnesinin key - value değer çifti olarak döner. elemanları hem key hem value gibi gösterir
result = mySet.entries();

//keys => Set nesnesinin key(value) değerlerini döner. 
result = mySet.keys();

//entries => Set nesnesinin eleman sayısını döner
result = mySet.size;

//keys => Set nesnesinin value değerlerini döner. 
result = mySet.values();

//set nesnesi elemanları üzerinde döner
mySet.forEach((item) => {
    console.log(item);
})

console.log(mySet);
console.log(result);

//clear => Set nesnesinin elemanlarını temizler

mySet.clear();
console.log(mySet);