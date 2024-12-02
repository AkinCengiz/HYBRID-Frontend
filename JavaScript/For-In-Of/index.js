const cities = ["İstanbul","Ankara","Adıyaman","Sakarya","Gaziantep","Malatya"]
const user = {firstname:"Akın",lastname:"Cengiz",city:"İstanbul",town:"Eyüp",district : "Göktürk",buildNumber : 8};

const experiences = ["HTML5","CSS3","JavaScript ES6"];
const numbers = [21,35,65,84,21,14,25,36,54];
const address = {city:"İstanbul",town:"Eyüp",district:"Göktürk",street : "2. Çayır Sk.", buildNumber : 8};

for(let i in cities){
    console.log(i,cities[i])
}

for(let i of cities){
    console.log(i);
}

for(let i in user){
    console.log(i,user[i])
}
for(let i of Object.entries(user)){
    console.log(i);
}

localStorage.setItem()

const deneme = [["key","value"],["key1","value1"]];