import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
  ]);

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
          {tasks.map((task, index) => (
            <div className="Tarefas" key={index}>
              <h3>
                <List id={`cbx-${index}`} label={task} />
              </h3>
            </div>
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