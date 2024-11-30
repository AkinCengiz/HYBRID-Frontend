
let experiences;

const containerElement = document.querySelector("#main.container");
//Input elementini seçip bir değişkene atıyoruz.
const inputElement = document.getElementById("cityValue");

//Buton elementlerinin seçerek değişkenlere atıyoruz.
const addButton = document.querySelector("button#add");
const updateButton = document.querySelector("#update");
const deleteButton = document.querySelector("button.btn.btn-danger");


//Ul elementini seçerek bir değişkene atıyoruz.
const ulElement = document.querySelector(".card-body>ul.list-group");



addButton.addEventListener("click", () => {
    let value = inputElement.value;
    if(localStorage.getItem("experiences") === null){
        experiences = [];
    }else{
        experiences = JSON.parse(localStorage.getItem("experiences"));
    }
    experiences.push(value);

    localStorage.setItem("experiences",JSON.stringify(experiences));
    inputElement.value = "";
    inputElement.focus();
    createList();
})


const createList = () => {
    let newList = JSON.parse(localStorage.getItem("experiences"));
    ulElement.innerHTML = "";
    newList.forEach((element,index) => {
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        liElement.id = index;
        liElement.innerHTML = element;
        liElement.addEventListener("click", () => {
            inputElement.value = liElement.textContent
            inputElement.setAttribute("key",liElement.id);
        })
        ulElement.append(liElement);
    });
}
createList();

deleteButton.addEventListener("click",() => {
    localStorage.removeItem(inputElement.key);
    inputElement.value = "";
    inputElement.focus();
    createList();
})