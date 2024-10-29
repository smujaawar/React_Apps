import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const inputData = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Enter a task");
    } else {
      setTask([...task, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const updatedArray = task.filter((_, i) => i !== index);
    setTask(updatedArray);
  };

  return (
    <div className="container">
      <h1 id="heading" >TODO LIST</h1>
      <div className="div1">
        <form>
          <div><input className="input1"
            type="text"
            name="task"
            placeholder="Enter the task"
            value={input}
            onChange={inputData}
          /></div>
          
          <div><button type="button" className="b1" onClick={addTask}>
            Add
          </button></div>
        </form>
      </div>



      <div className="div2">
        {task.map((value, index) => (
          <div className="divitem" key={index}>
            <p>{value}</p>
            <button className="b1" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;