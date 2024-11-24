/*
    DOM => Document Object Model


*/

// console.log(window.screen.height);
// console.log(window.innerHeight);
// console.log(window);

document.title = "Javascript - DOM Models"
 
//getElementsByTagName() => Etiket ismine göre elemntleri getirir. Dizi olarak döner.
const h1Tags = document.getElementsByTagName("h1");
//const firstH1 = document.getElementsByTagName("h1")[0];
const firstH1 = h1Tags[0];
const secondH1 = h1Tags[1];

console.log(h1Tags);
console.log(firstH1);
console.log(secondH1);

//getElementsByClassName() => Class isimlerine göre elementleri getirir. Sonuç bir dizidir.
const classTitle = document.getElementsByClassName("title");
console.log("Get Elements By Class Name")
console.log(classTitle);
console.log(classTitle[0]);
console.log(classTitle[1]);
console.log(classTitle[2]);
console.log(classTitle[3]);
console.log("Query Selector All")
const titleClass = document.querySelectorAll(".title");
console.log(titleClass);
console.log(titleClass[0]);
console.log(titleClass[1]);
console.log(titleClass[2]);
console.log(titleClass[3]);

//getElementById() => Id değerine göre element getirir. Tek bir sonuç döner.
const titleH1 = document.getElementById("title");
const titleSecond = document.getElementById("second");
const titleH2 = document.getElementById("h2Title");
const titleP = document.getElementById("pTitle");

console.log("Get Element By Id");
console.log(titleH1);
console.log(titleSecond);
console.log(titleH2);
console.log(titleP);

//querySelector() => Bize element seçimi yaparken classname, id, tagname vs gibi yapıları ortak bir metot kullanarak getirir.
console.log("Query Selector")
const h1Title = document.querySelector("#title");
const secondTitle = document.querySelector("#second");
const h2Title = document.querySelector("#h2Title");
const pTitle = document.querySelector("#pTitle");

console.log(h1Title);
console.log(secondTitle);
console.log(h2Title);
console.log(pTitle);
console.log("*******************");
const h1Element = document.querySelector(".title");
console.log(h1Element);
const elementH1 = document.querySelector("h1");
console.log(elementH1);
elementH1.innerHTML = "JavaScript Dom Models Intro";
elementH1.style.backgroundColor = "black";
elementH1.style.color = "white";
elementH1.style.padding = "10px";
elementH1.style.border = "3px solid red";
elementH1.classList.add("deneme");
elementH1.classList.remove("title");

elementH1.innerHTML += " - Eklenmiş bilgi";