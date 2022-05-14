import { useState } from 'react';
import classNames from 'classnames';
import Navbar from './component/Navbar';
import Container from './component/Container';
import './App.css';
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert('No Blank List');
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }];

    setTodos(addedTodos);
    setValue('');
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  }

  const handleSubtractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }

  return (
    <>

      <Navbar />

      <Container>
        <form className="form" onSubmit={handleSubmit} >
          <input
            onChange={(e) => { setValue(e.target.value) }}
            value={value}
            className="input"
            type="text"
            placeholder="List" />
          <button className="add-button" type="submit" >Add</button>
        </form>

        <div className='info'>

          <div className='info-total' >
            <p>{`Total List : ${todos.length}`}</p>
          </div>
          <div className='info-total' >
            <p>{`Total Counts : ${getTotalCounts()} `}</p>
          </div>
          <button onClick={() => setTodos([])} className='delete-all-button' >
            Delete All List
          </button>

        </div>

        {todos.length > 0 ? (
          <div className="todos" >
            {todos.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`} >
                  {todo.title}

                  <div className="todo-icon-wrapper" >
                    <div className='todo-count' > {todo.count} </div>

                    <button onClick={() => handleSubtractionCount(index)} className='todo-action-button' >
                      <img src={minusIcon} alt="Minus Icon" />
                    </button>

                    <button onClick={() => handleAdditionCount(index)} className='todo-action-button' >
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

      </Container>
    </>
  );
}

export default App;
