const firstnameInput = document.querySelector("#firstname");
const lastnameInput = document.querySelector("#lastname");
const containerElement = document.querySelector(".container");
console.log(containerElement);

const writeProcess = (e) => {
    console.log(e.target.value);
}

//focus eventi input elementine odaklanıldığında yapılacak işlemleri tanımlamamızı sağlar
firstnameInput.addEventListener("focus",() => {
    containerElement.style.backgroundColor = "red";
})
//blur eventi input elementinden ayrıldığımız zaman yapılacak işlemleri tanımlamamızı sağlar
firstnameInput.addEventListener("blur",() => {
    containerElement.style.backgroundColor = "white";
})


//Copy eventi input elementinin üzerinde kopyala işlemi yapıldığı zaman yapılacak olan işlemleri yapmamızı sağlar
lastnameInput.addEventListener("copy",(e) => {
    console.log("Kopyalanan Değer : ",e.target.value);
})
//Cut eventi input elementinin üzerinde kesme işlemi yapıldığı zaman yapılacak olan işlemleri yapmamızı sağlar
lastnameInput.addEventListener("cut",(e) => {
    console.log("Kesilen değer : ",e.target.value);
})

//Paste
lastnameInput.addEventListener("paste",(e) => {
    console.log("Yapıştırılan değer : ",e.target.value);
})

//change
lastnameInput.addEventListener("change",(e) => {
    console.log("Değişen değer : ",e.target.value);
})

firstnameInput.addEventListener("change",writeProcess);
