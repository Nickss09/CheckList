import React, { useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="div">
        <div className="Header">
          <h2 className="Title">Lista de Tarefas</h2>
        </div>

        <div className="List">
          <h3 style={{ textAlign: 'center' }}>Domingo</h3>
          {tasks.length !== 0 && tasks.map((task, index) => (
            <TaskList index={index} task={task} />
          ))}
        </div>

        <input className="Caixa_de_Texto"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite aqui"
        />

        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </>
  );
}

export default App;