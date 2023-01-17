
import image from './grocery.jpeg';
import './App.css';
import List from './Grocery-list.js';
import SkincareList from './Skincare-list';

function App() {
  const helloAlert = ()=> {
  alert ("Hello!")
  }
  const byeAlert =() =>{
    alert ("Bye!")
  }
  return (
    <div >
        <img src={image} className="Grocery-pic" alt="grocery" width="300px"/>
        <List/>   
        <SkincareList/>
        <button onClick={helloAlert}>ButtonOne</button>
        <button onClick={byeAlert}>ButtonTwo</button>
    </div>
  );
}

export default App;
