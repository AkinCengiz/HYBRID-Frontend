const userTag = document.getElementById("user");
console.log(userTag);

// setTimeout() belli bir süre sonra istedğimiz kod bloğunun çalıştırılmasını sağlar


function login(username){
    userTag.innerText = `Kullanıcı adı : ${username}`;
}

// setTimeout(login,10000,"akincengiz");
// setInterval(login,5000,"kullanici");
//let username = "akincengiz"
setTimeout((username = "akin") => {
    userTag.innerText = `Kullanıcı adı : ${username}`
}, 3000);