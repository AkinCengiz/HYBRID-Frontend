//arr.reduce((önceki,şimdiki) => {yapılacak işlemler},ilkdeğer);

const numbers = [1,2,3,4,5,6,7];
let total = 50;
const total1 = numbers.reduce((accumulator,current) => accumulator + current,50);
const total2 = numbers.reduce((accumulator,current) => {
    return accumulator + current
},30);

const numberMap = numbers.map(number => number ** 2);

const numberFilter = numbers.filter(number => number % 2 !== 0);

numbers.forEach(x => total += x);

console.log("Total 1 : ",total1);
console.log("Total 2 : ",total2)
console.log("Total : ",total)

const ages = [25,11,19,32,47,7,23];

const maxAge = ages.reduce((max,current)=>{
    return Math.max(max,current);
},0)

console.log("Max age : ", maxAge);

const customers = [
    {name : "Akın CENGİZ", balance : 10000},
    {name : "Melih Can GÜNEŞ", balance : 20000},
    {name : "Orçun GÖKOLUK", balance : 25000},
    {name : "Bilal KAYHAN", balance : 30000},
    {name : "Efe Can DEMİR", balance : 40000},
    {name : "Betül AKTOPRAK", balance : 45000},
    {name : "Halil İbrahim KARAKUŞ", balance : 25000},
    {name : "İsa Yasin KURU", balance : 35000},
    {name : "Mehmet Fatih BEZAN", balance : 22500},
    {name : "Hatice Kübra TOSUN", balance : 32500},
    {name : "Zehra VARAN", balance : 47500},
    {name : "Simay SEYMAN", balance : 42500},
    {name : "Mehmet ALBAYRAK", balance : 43500},
    {name : "Mutlu TAYFUN", balance : 44500}
];

const totalBalance = customers.reduce((accumulator,current) => accumulator + current.balance,0);

console.log("Total balance : ", totalBalance);

const names = ["Akın","Melih","Orçun","Bilal","Mehmet","Betül","Halil","İsa","Hatice","Kübra","Zehra","Simay","Mehmet","Mutlu","Efe","Orçun","Betül","İsa","Mehmet","Orçun"];

const nameCount = names.reduce((allnames,current) => {
    const count = allnames[current] ?? 0;
    return{
        ...allnames,[current]:count+1
       }
},{});

//[{"Akın",count : 1},{"Melih",count : 1},{"Orçun",count : 2},{"Mehmet",count : 2},]

console.log(nameCount);

console.log(customers[0].name)

const user = {name:"Akın",lastname:"Cengiz"};
//user[lastname] = "ACENGİZ";
//console.log(...user,user[lastname]);

// const deneme = ["Akın","Cengiz"];
// const [x,y] = deneme;
// console.log(y);

console.log("Numbers       : ",numbers)
console.log("Number Map    : ",numberMap)
console.log("Number Filter : ",numberFilter)
const numbersReduce = numberFilter.reduce((arr,cur) => arr+cur,0);
console.log("Number filter item sum : ", numbersReduce);

const namesReduce = names.reduce((arr,cur) => arr + ", " + cur,"");
console.log("Names Reduce : ",namesReduce)