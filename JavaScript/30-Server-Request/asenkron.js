//https://northwind.now.sh/api/categories

class ApiRequest{
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async post(url,data){
        const response = await fetch(url,{
            method : "POST",
            body : JSON.stringify(data),
            headers : { "Content-type" : "application/json"}
        });
        const result = await response.json();
        return result;
    }

    async put(url,data){
        const response = await fetch(url,{
            method : "PUT",
            body : JSON.stringify(data),
            headers : { "Content-type" : "application/json"}
        });
        const result = await response.json();
        return result;
    }

    async delete(url){
        const response = await fetch(url,{
            method : "DELETE"
        });
        return "Veri başarıyla silindi...";
    }
}

const request = new ApiRequest();

request.get("https://northwind.now.sh/api/categories")
.then(data => console.log(data))
.catch(err => console.log("Veri getirme işlemi sırasında hata oluştu. => ",err));

request.get("https://northwind.now.sh/api/products")
.then(data => console.log(data))
.catch(err => console.log("Veri getirme işlemi sırasında hata oluştu. => ",err));

//console.log(request.get());
request.post("https://northwind.now.sh/api/categories",{
    "description": "Yazılım Mühendisliği Yetiştirme Programı",
    "name": "YMYP-5"
}).then(data => console.log(data)).catch(err => console.log(err));

request.put("https://northwind.now.sh/api/categories/2",{
    "description": "Yazılım Mühendisliği Yetiştirme Programı",
    "name": "Yetenek Başakşehir"
}).then(data => console.log(data)).catch(err => console.log(err));

request.delete("https://northwind.now.sh/api/categories/1")
.then(data => console.log(data))
.catch(err => console.log(err));