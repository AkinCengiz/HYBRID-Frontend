/*
<div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">Fancy Product</h5>
                <!-- Product price-->
                $40.00 - $80.00
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
    </div>
</div>
*/

const url = "http://localhost:8080/api"

const productListElement = document.querySelector("#product-list");
//console.log(productListElement);


const getProducts = async () => {
    const response = await fetch(url+"/products");
    const data = await response.json();
    console.log(data);
    data.forEach(product => {
        const randomNumber = Math.floor(Math.random()*1000);
        //console.log(randomNumber)
        productListElement.innerHTML += `
            <div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <img class="card-img-top"  src="https://picsum.photos/450/300?random=${randomNumber}" alt="...">
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${product.name}</h5>
                            <!-- Product price-->
                            $ ${product.price.toFixed(2)}
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                    </div>
                </div>
            </div>
        `;
    });
}

getProducts();

const getByIdProduct = async () => {
    const response = await fetch(url+"/products/:id")
}