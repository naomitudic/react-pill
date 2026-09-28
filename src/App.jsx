import { useState } from 'react'
import './App.css'

function App() {
  const[items, setItems] = useState([]);

  return(
    <div>
      <div>
        {items.map((item, index) => <div key={index}>
          <a onClick = {() => setItems((items.filter((_, index) => ind !== inddex)))}>
          {item}
          </a>
          </div>)}
      </div>
      <form onSubmit = {(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newToDo = formData.get("todo"); 
        if (newToDo) {
          setItems((prevItems) => [...prevItems, newToDo]);
        }
        e.currentTarget.reset();
      }}>
        <input name="todo" required />
        <button type="submit">
          Create task to do
        </button>
      </form>
    </div>
  );

}

export default App