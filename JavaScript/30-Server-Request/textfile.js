function getTextContent(){
    fetch("./test.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

getTextContent();