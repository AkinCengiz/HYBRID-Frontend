function add(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number + 5);
      } else {
        reject("Sayısal bir değer girmelisiniz...");
      }
    }, 3000);
  });
}

add(7)
.then(res => console.log(res))
.catch(err => console.log(err));


add("7")
.then(res => console.log(res))
.catch(err => console.log(err));

add(7)
.then(res => res * 5)
.then(result => result / 10)
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log("İşlem sonu"));
