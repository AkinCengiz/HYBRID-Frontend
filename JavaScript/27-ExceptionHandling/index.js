const roomsElement = document.querySelector("#rooms");

const getData = async () => {
    const response = await fetch("https://northwind.vercel.app/api/customers");
    const rooms = await response.json();
    console.log(rooms);
    rooms.map(room => {
        roomsElement.innerHTML += `
        <li>${room.companyName}</li>
        `
    })

}

async function getInfo() {
    const response = await fetch("https://northwind.vercel.app/api/customers");
    const rooms = await response.json();
    console.log(rooms);
    rooms.map(room => {
        roomsElement.innerHTML += `
        <li>${room.companyName}</li>
        `
    })

}
getInfo();
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
const writeInfo = (customers) => {
    customers.forEach((customer,index) => {
        console.log(`Customer-${index+1}`,customer.name);
    });
    
}

function writeInfos(customers){
    customers.forEach((customer,index) => {
        console.log(`Customer-${index+1}`,customer.name);
    });
}

writeInfo(customers);
writeInfos(customers);
