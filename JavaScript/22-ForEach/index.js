const users = [
    "Melih Can AKGÜNEŞ","Mehmet ALBAYRAK", "Bilal KAYHAN", "Halil İbrahim KARAKUŞ","Hatice Kübra TOSUN", "Mert NAZLI", "Mutlu TAYFUN", "Orçun GÖKOLUK","Efe Can DEMİR"
];

const numbers = [1,3,5,7,9];

const myInfo = {
    firstname : "Akın",
    lastname : "Cengiz",
    city : "İstanbul",
    town : "Eyüp"
};

users.forEach(user => {
    console.log(user);
})

numbers.forEach(number => {
    console.log(number);
})

//Foreach ile dizi içerisinde dönerken değerleri yeni bir değişken olarak alamazsınız
const users2 = users.forEach(user => {
    return user;
});

const users4 = [];
users.forEach(user => {
    users4.push(user);
})

//Foreach((value,index));

users.forEach((user,index) => {
    console.log(`User-${index + 1} : `,user)
});


const users3 = users.map(user => {
    return user;
});

console.log("Users2 : ",users2);
console.log("Users3 : ",users3);
console.log("Users4 : ",users4);


console.log("User List => ",Object.keys(myInfo));

Object.keys(myInfo).forEach(key => {
    console.log(`myInfo[${key}] :`,myInfo[key]);
})

// myInfo.keys.forEach(key => {
//     console.log(key);
// })

Object.entries(myInfo).forEach(([key,value],index) => {
    // console.log("Key : ",key);
    // console.log("Value : ",value);
    // console.log("Index : ",index);
    console.log(`${index+1}. eleman : myInfo[${key}] : ${value}`);
})