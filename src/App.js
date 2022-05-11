import { useState } from 'react';
import classNames from 'classnames';
import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';
import minusIcon from './assets/minus-icon.svg';
import plusIcon from './assets/plus-icon.svg';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    { title: 'Jambu Batu', count: 1 },
    { title: 'Terong Balado', count: 1 },
    { title: 'Semangkat', count: 1 }

  ]);
  return (
    <>
      <nav className="nav" >
        <img className="nav-icon" src={shoppingIcon} alt="Shopping Icon" />
        <h1 className="nav-title" >Shopping List</h1>
      </nav>

      <section className="container" >
        <form className="form" >
          <input
            onChange={(e) => { setValue(e.target.value) }}
            value={value}
            className="input"
            type="text"
            placeholder="List" />
          <button className="add-button" type="submit" >Add</button>
        </form>

        {todos.length > 0 ? (
          <div className="todos" >
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`} >
                  {todo.title}

                  <div className="todo-icon-wrapper" >
                    <div className='todo-count' > {todo.count} </div>

                    <button className='todo-action-button' >
                      <img src={minusIcon} alt="Minus Icon" />
                    </button>

                    <button className='todo-action-button' >
                      <img src={plusIcon} alt="Plus Icon" />
                    </button>

                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div>Kosong</div>
        )}

      </section>
    </>
  );
}

export default App;
