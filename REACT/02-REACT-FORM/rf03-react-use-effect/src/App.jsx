
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [numbers,setNumbers] = useState([1,2,3]);
  const [user,setUser] = useState({email:"akin@cengiz.com",password : "Bjk1903"});
  
  

  //Her koşulda çalışır
  useEffect(() => {
    console.log("Her koşulda çalışır");
  });
  //Komponent ilk render edildiği zaman çalışır bir daha çalışmaz...
  useEffect(() => {
    console.log("Komponent ilk render edildiği zaman çalışır bir daha çalışmaz...")
  },[]);

  useEffect(() => {
    console.log(`Komponent ilk render edildiği zaman çalışır ve count değişkeni her güncellendiğinde çalışır...${count}`)
  },[count]);

  useEffect(() => {
    console.log(`Komponent ilk render edildiği zaman çalışır ve count ve name değişkeni her güncellendiğinde çalışır...${count} - ${name} `)
  },[count,name]);

  useEffect(() => {
    console.log(`Komponent ilk render edildiği zaman çalışır ve name, numbers ve user değişkenleri her güncellendiğinde çalışır...${name} - ${numbers[numbers.length-1]} `)
  },[name,numbers,user])

  return (
    <>
    <div>
      <p>Count : {count}</p>
      <p>Name : {name}</p>
      <p>Numbers : {numbers[numbers.length-1]}</p>
      <p>Email = {user.email} - Password = {user.password}</p>

      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
      <button onClick={() => setName(`Akın-${count}`)}>İsim Değiştir</button>
      <button onClick={() => setUser({email : "akincengiz@msn.com",password:"Akin1234"})}>Add User</button>
      <button onClick={() => setNumbers([...numbers,7])}>Add Number</button>
    </div>
      
        
    </>
  )
}

export default App
