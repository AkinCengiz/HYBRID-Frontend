const users = [
    { firstname : "Akın", lastname : "Cengiz", isActive : false},
    { firstname : "Hatice Kübra", lastname : "Tosun", isActive : true},
    { firstname : "Mehmet", lastname : "Albayrak", isActive : false},
    { firstname : "Orçun", lastname : "Gökoluk", isActive : true},
    { firstname : "Hüseyin", lastname : "Çiçek", isActive : false},
    { firstname : "Bilal", lastname : "Kayhan", isActive : true},
    { firstname : "Mutlu", lastname : "Tayfun", isActive : true}
];

const activeUser = users.filter(user => user.isActive);
console.log(activeUser);

activeUser.push({
    firstname:"Mert",
    lastname :"Nazlı",
    isActive : true
});

users.push({
    firstname:"Melih Can",
    lastname :"Güneş",
    isActive : true
});

const passiveUser = users.filter(user => user.isActive === false);
console.log(passiveUser);
console.log(users);


userPassive = [];
users.forEach((user) => {
    // if(user.isActive === false){
    //     userPassive.push(user);
    // }
    if(!user.isActive){
        userPassive.push(user);
    }
})
console.log(userPassive);

console.log(activeUser);
console.log(users);

const numbers = [15,7,9,26,23,84,129,16,19,29,315,37,54,22,5,1,200];

let numbers2 = numbers.filter(x => x > 78);
console.log("Numbers : ", numbers);
console.log("Numbers2 : ", numbers2);
let numbers3 = numbers2.filter(x => x > 50);
console.log("Numbers3 : ", numbers3);

console.log(numbers2 === numbers3);
numbers2 = numbers3;
numbers2.push(11);
console.log(numbers2 === numbers3);
console.log("Numbers2 : ", numbers2);
console.log("Numbers3 : ", numbers3);

