const users = [
    { firstname : "Akın", lastname : "Cengiz", isActive : false},
    { firstname : "Hatice Kübra", lastname : "Tosun", isActive : true},
    { firstname : "Mehmet", lastname : "Albayrak", isActive : false},
    { firstname : "Orçun", lastname : "Gökoluk", isActive : true},
    { firstname : "Hüseyin", lastname : "Çiçek", isActive : false},
    { firstname : "Bilal", lastname : "Kayhan", isActive : true},
    { firstname : "Mutlu", lastname : "Tayfun", isActive : true}
];
const numbers = [15,7,9,26,23,84,129,16,19,29,315,37,54,22,5,1,200];
const cities = ["İstanbul","Ankara","Adıyaman","Sakarya","Gaziantep","Malatya"];

const usersDiv = document.querySelector("#users");
console.log(usersDiv);

const users2 = users.map(user => {
    return user.firstname
});



console.log(users);
console.log(users2);

users.map(user => {
    usersDiv.innerHTML += `
        <div style="border:1px solid red; margin-top : 2px">
            <p>${user.firstname} ${user.lastname}</p>
            <p>IsActive : ${user.isActive ? "Aktif" : "Pasif"}</p>
        </div>
    `;
})

console.log("************ Foreach ****************");

users.forEach(user => console.log(user.firstname));