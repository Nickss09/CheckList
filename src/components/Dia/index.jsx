import './style.css';
import Tarefa from '../Tarefa';

function Dia({ dia, tarefas, onMarcarTarefa, onDesmarcarTarefa, onRemover }) {
  return (
    <div className="dia">
      <h2>{dia}</h2>
      {tarefas.length === 0 ? (
        <p>Sem tarefas</p>
      ) : (
        tarefas.map(t => (
          <Tarefa
            key={t.id}
            tarefa={t}
            onMarcarTarefa={onMarcarTarefa}
            onDesmarcarTarefa={onDesmarcarTarefa}
            onRemover={onRemover}
          />
        ))
      )}
    </div>
  );
}

export default Dia;
