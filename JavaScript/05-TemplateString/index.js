const firstname = "Akın";
let lastname = "Cengiz";
let city = "İstanbul";
let town = "Eyüp";
let price = 12000;
let amount = 7;
let tax = 0.18;
let welcome = "Sitemize hoşgeldiniz..." + firstname + " " + lastname;

console.log(welcome);



let fullname = firstname + " " + lastname; 

let info = "İsim : " + firstname + " Soyisim : " + lastname + " İlçe : " + town + " Şehir : " + city;

let result = `İsim : ${firstname} Soyisim : ${lastname} İlçe : ${town} Şehir : ${city}`;

let total = `Price : ${price}\nAmount : ${amount}\nTotal : ${price * amount}\nKDV : ${price * amount * tax}\nGenaral Total : ${(price * amount) + (price * amount * tax)} ' TL`;


let body = `
<h1>${firstname}</h1>
<h2>${lastname}</h2>
<h3>${town}</h3>
<p>${city}</p>
`;

const bodyTag = document.getElementById("body");
bodyTag.style.backgroundColor = "red";
bodyTag.style.color = "white";
bodyTag.innerHTML = body;

console.log(info);
console.log(result);
console.log(total);
console.log(body);
console.log(bodyTag);

<body>
    
</body>