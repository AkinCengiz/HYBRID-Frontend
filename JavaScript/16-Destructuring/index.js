const cities = ["İstanbul","Ankara","Adıyaman","Sakarya","Gaziantep","Malatya"];
const user = {firstname:"Akın",lastname:"Cengiz",city:"İstanbul",town:"Eyüp",district : "Göktürk",buildNumber : 8};

const [ist,ank,ad] = cities;

const [a,b,c,d] = cities;

console.log("ist : ",ist);
console.log("ank : ",ank);
console.log("ad : ",ad);
console.log("a : ",a);
console.log("d : ",d);

const {firstname:fn,lastname:ln,city:ct,town:tw} = user;
console.log("fn : ", fn);
console.log("ln : ", ln);
console.log("ct : ", ct);
console.log("tw : ", tw);

console.log(user);

// let firstname = user.firstname;
// let lastname = user.lastname;
// let city = user.city;

const {firstname,lastname} = user;
const {city,town,district,buildNumber} = user;

console.log("Firstname : ",firstname);
console.log("Lastname : ",lastname);
console.log("City : ",city);

const citiesTwo = ["Balıkesir","Trabzon","Artvin"];
const newlist = [...cities,"Konya","Eskişehir"];
const newlist2 = ["Konya","Eskişehir",...cities];
console.log(newlist);
console.log(newlist2);

const numbers = [1,35,2,74,22,14,15,19];

const added = (a,b,c,d=0,e=0) => {
    return a+b+c+d+e;
}


console.log(added(1,2,3));
console.log(added(...numbers));

const [number1,number2,...numbers2] = numbers;
console.log("Number1 : ",number1);
console.log("Number2 : ",number2);
console.log("Numbers2 : ",numbers2);