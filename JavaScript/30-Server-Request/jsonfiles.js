const getJsonContent = () => {
    fetch("./my-info.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

getJsonContent();