import List from "../List";
import './style.css'

const TaskList = (props) => {
    const { index, task } = props;

    return (
        <div className="Tarefas" key={index}>
            <h3><List id={`cbx-${index}`} label={task} /></h3>
        </div>
    )
};

export default TaskList;