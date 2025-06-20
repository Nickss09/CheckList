export default function Tarefa({ tarefa, onMarcarTarefa, onDesmarcarTarefa, onRemover }) {
  const alternarMarcacao = () => {
    if (!tarefa.concluida) {
      onMarcarTarefa(tarefa.id)
    } else {
      onDesmarcarTarefa(tarefa.id)
    }
  }
  
  return (
    <div className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      {/* <p>ID: {tarefa.id}</p> */}
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p><strong>Matéria:</strong> {tarefa.materia}</p>

      <button onClick={() => alternarMarcacao()}>{!tarefa.concluida ? '✅ Concluir' : '⛔ Desmarcar'}</button>
      <button onClick={() => onRemover(tarefa.id)}>❌ Remover</button>
    </div>
  );
}
