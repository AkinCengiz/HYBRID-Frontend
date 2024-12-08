//KEYBOARD EVENTS

const firstnameInput = document.querySelector("#firstname");
const lastnameInput = document.querySelector("#lastname");
const containerElement = document.querySelector(".container");


const writingInput = (e) => {
    console.log(e.which,e.key,"key press");
}

//document.addEventListener("keypress",writingInput)

// //keydown => klavyede bir tuşa basıldığı zaman tetiklenen olay
// firstnameInput.addEventListener("keydown",(e) => {
//     console.log("KeyDown",e.target.value);
// })

//document.addEventListener("keydown",writingInput)
document.addEventListener("keypress",writingInput)

// //keydown => klavyede bir tuşa basıldıktan sonra tuş bırakıldığı zaman tetiklenen olay
// firstnameInput.addEventListener("keyup",(e) => {
//     console.log("KeyUp",e.target.value);
// })


// // keypress => klavyede bir tuşa basıldığı zaman tetiklenen olay. (Sadece Character, numeric ve alphanumeric karakter tuşlarını yakalar)
// firstnameInput.addEventListener("keypress",(e) => {
//     console.log("KeyPress",e.target.value);
// })