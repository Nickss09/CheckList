# Checklist de Estudos

Este projeto é um aplicativo feito em React para organizar tarefas de estudo.

## Como funciona

- Posso criar tarefas com título, descrição, escolher a matéria e os dias da semana em que devo fazer.
- As tarefas ficam organizadas por dia da semana.
- Dá para filtrar as tarefas para ver só as de um dia ou de uma matéria.
- Posso marcar as tarefas como concluídas, desmarcar ou remover.
- Tudo isso usando componentes funcionais do React e o hook useState para controlar o estado.

## Como funciona o filtro

Na aplicação, tem dois filtros: um para o dia da semana e outro para a matéria. Eles controlam o que aparece na lista de tarefas.

O estado dos filtros fica assim:

```jsx
const [filtroDia, setFiltroDia] = useState('');
const [filtroMateria, setFiltroMateria] = useState('');
````

No JSX, temos selects para escolher o filtro:

```jsx
<select value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)}>
  <option value="">Todos os dias</option>
  {diasSemana.map(dia => <option key={dia} value={dia}>{dia}</option>)}
</select>

<select value={filtroMateria} onChange={(e) => setFiltroMateria(e.target.value)}>
  <option value="">Todas as matérias</option>
  {materias.map(m => <option key={m} value={m}>{m}</option>)}
</select>
```

Depois, quando o app mostra as tarefas, ele verifica esses filtros para exibir só as tarefas que combinam:

```jsx
tarefasPorDia.map((itemTarefa) => {
  if (filtroDia && filtroDia !== itemTarefa.dia) return null;

  const tarefasFiltradas = itemTarefa.tarefas.filter(
    (t) => !filtroMateria || t.materia === filtroMateria
  );

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
});
```

* Se o filtro de dia estiver ativo, só mostra as tarefas daquele dia.
* Depois filtra as tarefas desse dia para mostrar só as da matéria escolhida.
* Se nenhum filtro estiver ativo, mostra tudo.

## O que aprendi

* Como criar e usar componentes React funcionais.
* Como controlar estados com useState.
* Como passar informações entre componentes usando props.
* Como lidar com listas e filtros em React.
* A importância de organizar o código e separar funcionalidades em componentes.
* A base para continuar melhorando, como pensar em salvar dados e criar uma interface fácil de usar.

## Como rodar

1. Instalar as dependências com `npm install`.
2. Rodar o projeto com `npm run dev`.
3. Abrir o navegador em `http://localhost:5173/`.