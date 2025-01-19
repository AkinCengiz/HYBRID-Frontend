import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import TaskHeader from "./TaskHeader";
import TaskListItem from "./TaskListItem";
function TaskList({tasks,removeTask,editTask}) {
    const [important,setImportant] = useState(false);
    const [filteredTasks,setFilteredTasks] = useState(tasks);

    function handleTasksFilter(){
        const newImportant = !important;
        newImportant ? setFilteredTasks(tasks.filter(item => item.important === true)):setFilteredTasks(tasks);
        setImportant(newImportant);
    }

    useEffect(() => {
        setFilteredTasks(tasks);
    },[tasks]);

    if(tasks.length === 0){
        return<></>
    }
  return (
    <>
    <div className="pt-3">
        <TaskHeader important={important} handleTasksFilter={handleTasksFilter} />
        
        <ul className="list-group w-100">
            {
                filteredTasks.map((item,index) => <TaskListItem item={item} key={index} removeTask={removeTask} editTask={editTask} />)
            }
        </ul>
    </div>
    </>
  )
}

export default TaskList

TaskList.propTypes = {
    tasks : PropTypes.array,
    removeTask : PropTypes.func,
    editTask : PropTypes.func
}