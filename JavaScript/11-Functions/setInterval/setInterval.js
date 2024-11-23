let date = new Date();

const timeElement = document.getElementById("time");
console.log(timeElement);


function getHour(){
    timeElement.innerText = new Date().toLocaleTimeString();
}

setInterval(function(){
    getHour();
},1000)