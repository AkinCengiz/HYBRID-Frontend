// HTTP METHODS
/*
GET     => Bir kaynaktan (dosya, api url, vb.) veri çekip okuyacağımız zaman kullanılır.
POST    => Bir kaynak üzerine (dosya, api url, vb.) veri ekleme(kaydetme) yani create işlemleri yapmak için kullanılır.
PUT     => Bir kaynak üzerindeki (dosya, api url, vb.) veriyi güncellemek yani update işlemleri yapmak için kullanılır.
PATCH   => Bir kaynak üzerindeki (dosya, api url, vb.) verinin belli alanlarını güncellemek yani update işlemleri yapmak için kullanılır.
DELETE  => Bir kaynak üzerinde (dosya, api url, vb.) veri silme yani delete işlemleri yapmak için kullanılır.

*/


const url = "https://jsonplaceholder.typicode.com/albums";
const nortwindUrl = "https://northwind.now.sh/api/categories";

//GET METODU => URL üzerindeki veriyi get metodu ile çekiyoruz...
function get(url){
    fetch(url).then(response => response.json()).then(x => console.log(x));
}
get(url);

function getPromise(url){
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}



//console.log(getPromise(url));


//POST METODU => URL üzerindeki kaynağa yeni kayıt ekliyoruz
function postRequest(url,data){
    return new Promise((resolve,reject) => {
        fetch(url,{
            method : "POST",
            body : JSON.stringify(data),
            headers : { "content-type" : "application/json"}
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}

//console.log(postRequest(nortwindUrl,{name : "Bilgisayar", description : "Bilgisayar kategorisindeki tüm ürünler"}));
//console.log(getPromise(nortwindUrl));
// console.log(postRequest(url,{userId : 10, title : "Nostalji"}));
// console.log(getPromise(url));

//PUT METODU => URL üzerindeki kaynakta güncelleme yapıyoruz

function putRequest(url,data){
    return new Promise((resolve,reject) => {
        fetch(url,{
            method : "PUT",
            body : JSON.stringify(data),
            headers : { "content-type" : "application/json;"}
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
}

putRequest("https://jsonplaceholder.typicode.com/albums/100",{
    "userId": 5,
    "title": "Best Of 2000's"
}).then(console.log(data)).catch(err => console.error(err));