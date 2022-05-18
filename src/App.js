import { useState } from 'react';
import classNames from 'classnames';

import Navbar from './component/Navbar';
import Container from './component/Container';
import SearchInput from './component/SearchInput';
import Info from './component/Info';
import Todos from './component/Todos';

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
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubtractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}

          />
        ) : (
          <div>Kosong</div>
        )}

      </Container>
    </>
  );
}

export default App;
