const registerForm = document.querySelector("#register-form");

const emailTag = document.getElementById("email");

registerForm.addEventListener("submit",(e)=> {
   e.preventDefault();


   
   const formValues = {};

   Array.from(e.target.elements).forEach(element => {
    if(element.tagName === "INPUT")
    {
        // console.log(element.type);
        // console.log(element.value);
        // console.log(element.tagName)
        console.log(element.name)
    }
   })
})

// const emailContentChange = (e) => {
//     console.log(e.target.value);
// }

emailTag.addEventListener("keydown",(e)=> {
    
   console.log(e.target.value);
})

let result;
console.log(result);

