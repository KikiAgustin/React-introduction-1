import { useState } from 'react';
import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <nav className="nav" >
        <img className="nav-icon" src={shoppingIcon} alt="Shopping Icon" />
        <h1 className="nav-title" >Shopping List</h1>
      </nav>

      <section className="container" >
        <form className="form" >
          <input className="input" type="text" placeholder="List" />
          <button className="add-button" type="submit" >Add</button>
        </form>
      </section>
    </>
  );
}

export default App;
