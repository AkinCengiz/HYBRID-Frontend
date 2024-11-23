const bodyElement = document.getElementById("body");


const user = {
  firstname: "Akın",
  lastname: "Cengiz",
  programLanguages: ["JavaScript", "CSharp"],
  address: {
    city: "İstanbul",
    town: "Eyüp",
    district: "Göktürk",
    street: "2. Çayır Sokak",
    buildNumber: 8,
  },
  contact: {
    phone: "123 456 78 90",
    email: "akincengiz@msn.com",
  },
  getInfo: () => {
    console.log("Metot Firstname : " + user.firstname);
    console.log("Firstname : " + user.firstname);
    console.log(`Lastname : ${user.lastname}`);
    console.log(`Programming Languages : ${user.programLanguages}`);
    console.log(`Programming Language : ${user.programLanguages[0]}`);
    console.log(`Programming Language : ${user.programLanguages[1]}`);
    console.log("Address :\nCity : " + user.address.city);
    console.log("Town : " + user.address.town);
    console.log("District : " + user.address.district);
    console.log("Street : " + user.address.street);
    console.log("Buld Number : " + user.address.buildNumber);
  },
  getInfo2 : () => {
    console.log(`
    Firstname : ${user.firstname} - Lastname : ${user.lastname}
    Programming Languages : ${user.programLanguages}    
    `)
  }
};

console.log(user);

user.getInfo();
user.getInfo2();
let article = `bu bir deneme makalesidir
deneme yapmamızın konusu enter yapıyor mu`;
console.log(article);

// const h1Tag = document.createElement("h1");
// h1Tag.className = "title";
// h1Tag.style.color = "blue";
// h1Tag.innerText = user.firstname + " " + user.lastname;
// const pTag = document.createElement("p");
// pTag.innerText = user.contact.email;
// bodyElement.appendChild(h1Tag);
// bodyElement.appendChild(pTag);
// const ulTag = document.createElement("ul");
// const liTag = document.createElement("li");
// liTag.innerText = user.programLanguages[0];
// ulTag.appendChild(liTag);
// const liTag2 = document.createElement("li");
// liTag2.innerText = user.programLanguages[1];
// ulTag.appendChild(liTag2);
// bodyElement.appendChild(ulTag);


bodyElement.innerHTML = `
    <h1 class="title" style="color:red;">${user.firstname} ${user.lastname}</h1>
    <p>${user.contact.email}</p>
    <ul>
        <li>${user.programLanguages[0]}</li>
        <li>${user.programLanguages[1]}</li>
    </ul>
`;
