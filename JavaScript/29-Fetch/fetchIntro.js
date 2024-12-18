//Mevcutta bulunan bir dosyada veri okuma

fetch("../Database/northwind.json").then(response => response.json()).then(data => console.log(data));

//URL üzerinden veri okuma

fetch("https://northwind.vercel.app/api/products").then(response => response.json()).then(data => console.log(data));

const productList = document.getElementById("product-list");

fetch("https://northwind.vercel.app/api/products").then(response => response.json()).then(data => {
    data.map(product => {
        productList.innerHTML += `
            <li id="product-${product.id}">${product.name} - Price : ${product.unitPrice}</li>
        `;
})
});
