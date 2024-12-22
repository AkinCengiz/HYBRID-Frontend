const portfolioElement = document.getElementById("portfolio");
//console.log(portfolioElement);


fetch("./portfolios.json")
.then(response => response.json())
.then(data => data.portfolios.forEach(portfolio => {
    const portfolioItem = `
        <div class="card-box">
            <div class="card">
                <img
                    src="${portfolio.images}"
                    class="card-img-top"
                    alt="${portfolio.title} image"
                />
                <div class="card-body">
                    <h5 class="card-title">${portfolio.title}</h5>
                    <p class="card-text">
                    ${portfolio.description}
                    </p>
                </div>
            </div>
        </div>
    `;
    portfolioElement.innerHTML += portfolioItem;
}))


const aboutElement = document.querySelector("#about");
const productsList = document.createElement("div");
productsList.id = "products";


//console.log(aboutElement)

fetch("./skills.json")
.then(res => res.json())
.then(data => {
    const skillTitle = document.createElement("h4");
    skillTitle.textContent = "Technical Skills";
    aboutElement.appendChild(skillTitle);
    data.skills.forEach(skill => {
        const skillElement = `
            <p>${skill.title}</p>
            <div class="upper-skill">
                <div class="lower-skill" style="width: ${skill.degree}%;">${skill.degree}%</div>
            </div>
        `;
        aboutElement.innerHTML += skillElement;
    })
    aboutElement.innerHTML += `<button id="download">Download Resume</button>`
    const h4Element = document.createElement("h4");
    h4Element.textContent = "How much I charge";
    aboutElement.append(h4Element)
    aboutElement.append(productsList);

})


fetch("./products.json")
.then(res => res.json())
.then(data => {
    //console.log(data);
    data.products.forEach((product,index) => {
        productsList.innerHTML += `
            <div class="product">
                ${index !== 1 ? `<h3 class="product-title">${product.title}</h3>` : `<h3 class="product-title pro-color">${product.title}</h3>` }
                
                <ul class="product-features">                
                    ${product.features.map((feature) => `<li>${feature}</li>`)}
                </ul>
                <div class="price">
                    <p>$ ${product.payment.price}</p>
                    <p>${product.payment.expired}</p>
                </div>
                <div class="price-button">
                    <button>Sign Up</button>
                </div>
                
            </div>
        `;
    })
})


const contactSection = document.querySelector("#contact");
const contactBoxElement = document.querySelector("#contact-box");
// console.log(contactSection);
// console.log(contactBoxElement);

fetch("./contact.json")
.then(response => response.json())
.then(data => {
    //console.log(data);
    contactBoxElement.innerHTML = `
        <div class="contact-item"><i class="fa-solid fa-envelope"></i><span>${data.email}</span></div>
        <div class="contact-item pro-color"><i class="fa-solid fa-location-dot"></i><span>${data.address.town} / ${data.address.city}</span></div>
        <div class="contact-item"><i class="fa-solid fa-phone"></i><span>${data.phone}</span></div>
    `;
});

const contactForm = document.querySelector("#contact-form");
//console.log(contactForm);
const nameLabel = document.createElement("label");
nameLabel.classList.add("form-label");
nameLabel.htmlFor = "name";
nameLabel.textContent = "Name";
contactForm.append(nameLabel);
const nameInput = document.createElement("input");
nameInput.classList = "form-input";
nameInput.type = "text";
nameInput.id = "name";
contactForm.append(nameInput);
const emailLabel = document.createElement("label");
emailLabel.className = "form-label";
emailLabel.htmlFor = "email";
emailLabel.textContent = "Email";
contactForm.append(emailLabel);
const emailInput = document.createElement("input");
emailInput.className = "form-input";
emailInput.type = "email";
emailInput.id = "email";
contactForm.append(emailInput);
const messageLabel = document.createElement("label");
messageLabel.classList.add("form-label");
messageLabel.htmlFor = "message";
messageLabel.textContent = "Message";
contactForm.append(messageLabel);
const messageInput = document.createElement("input");
messageInput.classList = "form-input";
messageInput.type = "text";
messageInput.id = "message";
contactForm.append(messageInput);
const sendButton = document.createElement("button");
sendButton.textContent = "Send Message";
contactForm.append(sendButton);


//console.log(nameInput);

// let name = "Akın";
// let surname = "Cengiz"

// contactForm.innerHTML += `
// <form id="contact-form">
//                 <label class="form-label" for="name">${name}</label>
//                 <input class="form-input" type="text" id="name">
//                 <label class="form-label" for="email">${surname}</label>
//                 <input class="form-input" type="email" id="email">
//                 <label class="form-label" for="message">Message</label>
//                 <input class="form-input" type="text" id="message">
//                 <button>Send Message</button>
//             </form>
// `;

