
let experiences;

const containerElement = document.querySelector("#main.container");
//Input elementini seçip bir değişkene atıyoruz.
const inputElement = document.getElementById("cityValue");

//Buton elementlerinin seçerek değişkenlere atıyoruz.
const addButton = document.querySelector("button#add");
const updateButton = document.querySelector("#update");
const deleteButton = document.querySelector("button.btn.btn-danger");
const clearButton = document.querySelector("button.btn.btn-warning");


//Ul elementini seçerek bir değişkene atıyoruz.
const ulElement = document.querySelector(".card-body>ul.list-group");

clearButton.addEventListener("click", () => {
    //local stprage üzerindeki tüm key-value çiftleri silinir...
    //sessionStorage.clear();
    //local storage üzerinde sadece parametre olarak verilen key değerine ait kayır silinir
    sessionStorage.removeItem("experiences");
    createList();
})

addButton.addEventListener("click", () => {
    let value = inputElement.value;
    if(sessionStorage.getItem("experiences") === null){
        experiences = [];
    }else{
        experiences = JSON.parse(sessionStorage.getItem("experiences"));
    }
    if(experiences.includes(value)){
        alert("Girilen değer daha önce tanımlanmış...");
    }else{        
        experiences.push(value);
    }

    sessionStorage.setItem("experiences",JSON.stringify(experiences));
    inputElement.value = "";
    inputElement.focus();
    createList();
})


const createList = () => {
    let newList = JSON.parse(sessionStorage.getItem("experiences"));
    ulElement.innerHTML = "";
    newList.forEach((element) => {
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        liElement.innerHTML = element;
        liElement.addEventListener("click", () => {
            inputElement.value = liElement.textContent
        })
        ulElement.append(liElement);
    });
}
createList();

deleteButton.addEventListener("click",() => {
    const newList = JSON.parse(sessionStorage.getItem("experiences"));
    //console.log(newList);
    newList.forEach((item,index) => {
        if(item === inputElement.value){
            newList.splice(index,1);
        }
    })
    sessionStorage.setItem("experiences",JSON.stringify(newList));
    inputElement.value = "";
    inputElement.focus();
    createList();
})