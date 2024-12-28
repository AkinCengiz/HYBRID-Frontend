const mainContainer = document.querySelector("#main-container");
//console.log(mainContainer)

const url = "http://localhost:8080/api";

const getUsers = async() => {
    const response = await fetch(url+"/users");
    const data = await response.json();
    data.forEach(user => {
        mainContainer.innerHTML += `
            <div class="card m-3" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID : ${user.id}</li>
                <li class="list-group-item">Firstname : ${user.firstname}</li>
                <li class="list-group-item">Lastname : ${user.lastname}</li>                
            </ul>
        </div>
        `;
    });
}
getUsers();
//window.onload.getUsers();

// fetch("http://localhost:8080/api/users") .then(res => { if (!res.ok) { throw new Error(`HTTP error! status: ${res.status}`); } return res.json(); }) .then(data => console.log(data)) .catch(err => console.error('Error:', err));
const productsList = document.querySelector("#products")
const getProducts = async () => {
    const response = await fetch(url+"/products");
    const data = await response.json();
    data.forEach(product => {
        productsList.innerHTML += `
            <div class="card m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id : ${product.id}</li>
                    <li class="list-group-item">Category : ${product.category}</li>
                    <li class="list-group-item">Stock : ${product.stockAmount}</li>
                    <li class="list-group-item">Price : ${product.price}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        `;
    })
}

getProducts();
const categoryList = document.querySelector("#category-list")
const getCategories = async () => {
    const response = await fetch(url+"/categories");
    const data = await response.json();
    data.forEach(category => {
        categoryList.innerHTML += `
            <li class="list-group-item">${category.name}</li>
        `;
    })
}

getCategories();