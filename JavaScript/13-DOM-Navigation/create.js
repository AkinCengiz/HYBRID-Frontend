const body = document.getElementsByTagName("body")[0];
//console.log(body);
const containerElement = document.createElement("div");
containerElement.classList = "container main deneme";
containerElement.classList.add("Eklenen")
containerElement.classList += " main-content header bg-dark";
containerElement.classList.remove("deneme");
containerElement.id = "header";
containerElement.innerHTML = "<h1>Create Element</h1>";
body.append(containerElement);


const ulElement = document.createElement("ul");
for(let i = 0; i <= 14; i++){
   const liElement = document.createElement("li");
   liElement.id = `${i+1}`;
   liElement.innerText = `Döngü - ${i + 1}`
    ulElement.append(liElement); 
}

containerElement.append(ulElement);
body.append(ulElement);


const divElemnt = document.createElement("div");
// divElemnt.innerHTML = `
//     <h2>Bu paragraf başlığıdır.</h2>
//     <p>Bu birinci paragraf</p>
//     <p>Bu ikici paragraf</p>
//     <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>Item 4</li>
//     </ul>`;

const h2Element = document.createElement("h2")
h2Element.innerText="Bu paragraf başlığıdır.";
divElemnt.append(h2Element);
const pElement = document.createElement("p");
pElement.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur beatae ad minus, qui enim consequuntur fugiat assumenda fugit, modi tempora consequatur, placeat eveniet rem?";
divElemnt.append(pElement);
containerElement.append(divElemnt)

body.append(divElemnt);

