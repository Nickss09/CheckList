import { useState } from 'react';

import Dia from './components/Dia';
import { diasSemana, materias, tarefasPorDia as listaInicial } from './constants';
import './App.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [tarefasPorDia, setTarefasPorDia] = useState(listaInicial);
  const [materia, setMateria] = useState(materias[0]);
  const [tarefas, setTarefas] = useState([]);

  const [filtroDia, setFiltroDia] = useState('');
  const [filtroMateria, setFiltroMateria] = useState('');

  const adicionarTarefa = () => {
    if (titulo.trim() === '') return;

    const novaTarefaBase = {
      titulo,
      descricao,
      materia,
      dias: diasSelecionados,
      concluida: false,
    };

    const novasTarefasPorDia = tarefasPorDia.map((tarefaObj) => {
      if (diasSelecionados.includes(tarefaObj.dia)) {
        const novaTarefa = {
          id: crypto.randomUUID(),
          ...novaTarefaBase
        };

        return {
          ...tarefaObj,
          tarefas: [...tarefaObj.tarefas, novaTarefa]
        }
      }

      return tarefaObj;
    });

    setTarefasPorDia(novasTarefasPorDia);

    setTarefas(prevTarefas => [...prevTarefas, {...novaTarefaBase, id: crypto.randomUUID() }]);
    setTitulo('');
    setDescricao('');
    setDiasSelecionados([]);
    setMateria(materias[0]);
  };

  const marcarConcluida = (id) => {
    const novasTarefasPorDia = tarefasPorDia.map(itemTarefa => {
      return {
        ...itemTarefa,
        tarefas: itemTarefa.tarefas.map(tarefa =>
          tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
        )
      };
    });

    setTarefasPorDia(novasTarefasPorDia);
  };

  const desmarcarConcluida = (id) => {
    const novasTarefasPorDia = tarefasPorDia.map(itemTarefa => {
      return {
        ...itemTarefa,
        tarefas: itemTarefa.tarefas.map(tarefa =>
          tarefa.id === id ? { ...tarefa, concluida: false } : tarefa
        )
      };
    });

    setTarefasPorDia(novasTarefasPorDia);
  };

  const removerTarefa = (id) => {
    const novasTarefasPorDia = tarefasPorDia.map(itemTarefa => {
      return {
        ...itemTarefa,
        tarefas: itemTarefa.tarefas.filter(tarefa => tarefa.id !== id)
      };
    });
  
    setTarefasPorDia(novasTarefasPorDia);
  };

  const alternarDia = (diaSelecionado) => {
    if (diasSelecionados.includes(diaSelecionado)) {
      setDiasSelecionados(diasSelecionados.filter(dia => dia !== diaSelecionado));
    } else {
      setDiasSelecionados([...diasSelecionados, diaSelecionado]);
    }
  };

  return (
    <div className="App">
      <h1>Checklist de Estudos</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <div className="checkboxes">
          {diasSemana.map(dia => (
            <label key={dia}>
              <input
                type="checkbox"
                checked={diasSelecionados.includes(dia)}
                onChange={() => alternarDia(dia)}
              />
              {dia}
            </label>
          ))}
        </div>

        <select value={materia} onChange={(e) => setMateria(e.target.value)}>
          {materias.map(mat => (
            <option key={mat} value={mat}>{mat}</option>
          ))}
        </select>

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <div className="filtros">
        <select value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)}>
          <option value="">Todos os dias</option>
          {diasSemana.map(dia => <option key={dia} value={dia}>{dia}</option>)}
        </select>

        <select value={filtroMateria} onChange={(e) => setFiltroMateria(e.target.value)}>
          <option value="">Todas as matérias</option>
          {materias.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <div className="dias-container">
        {tarefasPorDia.map((itemTarefa) => {
          if (filtroDia && filtroDia !== itemTarefa.dia) return null;

          const tarefasFiltradas = itemTarefa.tarefas.filter(
            (t) => !filtroMateria || t.materia === filtroMateria);

          return (
            <Dia
              key={itemTarefa.dia}
              dia={itemTarefa.dia}
              tarefas={tarefasFiltradas}
              onMarcarTarefa={marcarConcluida}
              onDesmarcarTarefa={desmarcarConcluida}
              onRemover={removerTarefa}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
