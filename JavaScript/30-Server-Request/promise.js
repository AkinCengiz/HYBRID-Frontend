// function getPromise(number){
//     let total = 0;
//     total += number;
//     return total;
// }


// let total = getPromise(5);
// console.log(total);

//PROMISE
//Promise mutlaka bir sonuç döner. Bu sonuç olumlu ya da olumsuz olabilir.
// function getPromise(data){
//     return new Promise((resolve,reject) => {
//         if(typeof(data) === "string"){
//             resolve("Değer : " + data);
//         }else{
//             reject("Hatalı parametre kullanımı...");
//         }
//     })
// }

// getPromise("Akın").then(data => console.log(data)).catch(err => console.error(err));
// getPromise(15).then(data => console.log(data)).catch(err => console.error(err));

// function isAdmin(isData){
//     return new Promise((resolve,reject) => {
//         if(isData){
//             resolve("Admin paneline hos geldiniz...");
//         }
//         else{
//             reject("Admin kullanıcı ile giriş yapılması gerekmektedir...");
//         }
//     })
// }

// isAdmin(true).then(response => console.log(response)).catch(response => console.log(response));
// isAdmin(false).then(response => console.log(response)).catch(response => console.log(response));

console.log(getData("Akın CENGİZ"));
console.log(getData(true));
// console.log(getDataV2("Akın CENGİZ"));
// console.log(getDataV2(true));

function getData(data){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof(data) === "string"){
                resolve("Resolve değeri : " + data);
            }else{
                reject("Hata yanlış veri tipi");
            }
        },5000)
    });
}

const getDataV2 = (data) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof(data) === "string"){
                resolve("Resolve değeri : " + data);
            }else{
                reject("Hata yanlış veri tipi");
            }
        },5000)
    });
}

console.log(getData("Akın CENGİZ"));
console.log(getData(true));
console.log(getDataV2("Akın CENGİZ"));
console.log(getDataV2(true));