//MOUSE EVENTS

const btnTag = document.querySelector("#btn");
const boxbtnTag = document.querySelector("#box-btn");
const boxElement = document.querySelector(".box");

const changeStyle = () => {
    btnTag.style.backgroundColor = "black";
    btnTag.style.border = "3px solid green";
    btnTag.style.color = "white";
    btnTag.textContent = "Deneme"
    console.log("Mouse Over")
}




//Mouse Over

btnTag.addEventListener("mouseover",changeStyle);

//Mouse Out
btnTag.addEventListener("mouseout",() => {
    btnTag.style.backgroundColor = "green";
    btnTag.style.border = "3px solid black";
    btnTag.style.color = "black";
    console.log("Mouse Out")
});

//Mouse click
btnTag.addEventListener("click",()=> {
    console.log("Butona tıklandı...");
})


//Mouse doubleclick
btnTag.addEventListener("dblclick",()=> {
    console.log("Butona çift tıklandı...");
})


//Mouse Down
btnTag.addEventListener("mousedown",() => {
    btnTag.style.padding = "30px";
    console.log("Mouse Down")
})

//Mouse Up
btnTag.addEventListener("mouseup",() => {
    btnTag.style.padding = "10px";
    console.log("Mouse Up")
})

console.log(boxElement);

//Mouse enter
boxElement.addEventListener("mouseenter",()=> {
    boxElement.style.backgroundColor = "aqua";
    console.log("Mouse Enter")
})
//Mouse leave
boxElement.addEventListener("mouseleave",()=> {
    boxElement.style.backgroundColor = "grey";
    console.log("Mouse Leave")
})
//Mouse over
boxElement.addEventListener("mouseover",()=> {
    boxElement.style.backgroundColor = "orange";
    console.log("Mouse Over")
})
//Mouse out
boxElement.addEventListener("mouseout",()=> {
    boxElement.style.backgroundColor = "blue";
    console.log("Mouse Out")
})