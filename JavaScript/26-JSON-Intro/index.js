
const user = `
{
    "firstname" : "Akın",
    "lastname" : "Cengiz",
    "Address" : {
        "city" : "İstanbul",
        "town" : "Eyüp"
    }
}
`;


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
console.log(user,typeof(user));

const userJson = JSON.parse(user);
console.log(userJson, typeof(userJson));

console.log(JSON.stringify(userJson));

const stringCustumers = JSON.stringify(customers);
console.log(stringCustumers);

const jsonCustomers1 = JSON.parse(customers);

//const jsonCustumers2 = customers.json(); Node js ile gelen stringi h-json formatına çevirir.