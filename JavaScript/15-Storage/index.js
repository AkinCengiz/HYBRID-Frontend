
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
    //localStorage.clear();
    //local storage üzerinde sadece parametre olarak verilen key değerine ait kayır silinir
    localStorage.removeItem("experiences");
    createList();
})

addButton.addEventListener("click", () => {
    let value = inputElement.value;
    if(localStorage.getItem("experiences") === null){
        experiences = [];
    }else{
        experiences = JSON.parse(localStorage.getItem("experiences"));
    }
    if(experiences.includes(value)){
        alert("Girilen değer daha önce tanımlanmış...");
    }else{        
        experiences.push(value);
    }

    localStorage.setItem("experiences",JSON.stringify(experiences));
    inputElement.value = "";
    inputElement.focus();
    createList();
})


const createList = () => {
    let newList = JSON.parse(localStorage.getItem("experiences"));
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
    const newList = JSON.parse(localStorage.getItem("experiences"));
    newList.forEach((item,index) => {
        if(item === inputElement.value){
            newList.splice(index,1);
        }
    })
    localStorage.setItem("experiences",JSON.stringify(newList));
    inputElement.value = "";
    inputElement.focus();
    createList();
})