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
                <li class="list-group-item bg-success">ID : ${user.id}</li>
                <li class="list-group-item bg-success">Firstname : ${user.firstname}</li>
                <li class="list-group-item bg-success">Lastname : ${user.lastname}</li>                
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
                <div class="card-body bg-info">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-info">Id : ${product.id}</li>
                    <li class="list-group-item bg-info">Category : ${product.category}</li>
                    <li class="list-group-item bg-info">Stock : ${product.stockAmount}</li>
                    <li class="list-group-item bg-info">Price : ${product.price}</li>
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
            <li class="list-group-item bg-secondary">${category.name}</li>
        `;
    })
}

getCategories();

//Customer controller

/*
firstname, lastname, email, City, Town, phone, balance
*/

const customerContainer = document.querySelector("#customer-container");

const getCustomers = async () => {
    const response = await fetch(url+"/customers");
    const data = await response.json();
    data.forEach(customer => {
        customerContainer.innerHTML += `
            <div class="card m-3 " style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-danger">ID : ${customer.id}</li>
                <li class="list-group-item bg-danger">Firstname : ${customer.firstname}</li>
                <li class="list-group-item bg-danger">Lastname : ${customer.lastname}</li>                
            </ul>
        </div>
        `;
    })
}

getCustomers();