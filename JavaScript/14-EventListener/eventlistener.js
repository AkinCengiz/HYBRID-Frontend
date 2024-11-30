const container = document.querySelector(".container");
console.log(container);

const createListItem = () => {
    const ulList = document.createElement("ul");
    ulList.className = "navbar";
    for(let i = 0; i < 10; i++){
        const liElement = document.createElement("li");
        liElement.className = "list-item";
        liElement.innerHTML = `List item ${i + 1}`;
        ulList.append(liElement);
        liElement.addEventListener("click",(e) => {
            console.log(e.target.textContent);
        })
    }
    container.append(ulList);
}



const btn = document.createElement("button");
btn.id = "btnFirst";
btn.textContent = "Create";
container.prepend(btn);
btn.addEventListener("click",createListItem);
btn.addEventListener("mouseover",() => {
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
})
btn.addEventListener("mouseleave",() => {
    btn.style.color = "black";
    btn.style.backgroundColor = "grey";
})
btn.addEventListener("mousedown", () => {
    btn.style.padding = "5px";
})
btn.addEventListener("mouseup",() => {
    btn.style.padding = "2px";
})


const pElement = document.createElement("p");
pElement.textContent = "P ELEMENT Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur beatae ad minus, qui enim consequuntur fugiat assumenda fugit, modi tempora consequatur, placeat eveniet rem?";
container.append(pElement);

pElement.addEventListener("mouseover",() => {
    pElement.style.border = "1px solid red";
    pElement.style.backgroundColor = "blue";
    pElement.style.color = "white";
})

pElement.addEventListener("mouseleave",() => {
    pElement.style.border = "none";
    pElement.style.backgroundColor = "white";
    pElement.style.color = "blue";
})
pElement.addEventListener("click", () => {
    const pad = pElement.style.padding;
    console.log(pad)
    if(pad !== "10px")
    {
        pElement.style.padding = "10px";
    }else{
        pElement.style.padding = "5px";
    }
        
})

const changeBg = document.createElement("button");
changeBg.textContent = "Değiştir";
changeBg.style.padding = "10px";
container.prepend(changeBg);

changeBg.addEventListener("click",() => {
    // if(container.classList.toString().includes("bg-primary")){
    //     container.classList.remove("bg-primary");
    // }else{
    //     container.classList.add("bg-primary");
    // }
    container.classList.toggle("bg-primary");
})
