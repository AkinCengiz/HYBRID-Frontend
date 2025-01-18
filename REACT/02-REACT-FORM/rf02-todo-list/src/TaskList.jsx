import PropTypes from "prop-types";
function TaskList({tasks,removeTask}) {
    if(tasks.length === 0){
        return<></>
    }
  return (
    <>
    <div className="pt-3">
        <h4>Task List</h4>
        <ul className="list-group">
            {
                tasks.map((item,index) => 
                <li className="list-group-item d-flex justify-content-between" key={index}>{item.task} <span>{item.important ? "Important" : "Normal"}</span> 
                    <div className="btn-group float-end" role="group">
                        <button type="button" className="btn btn-sm btn-success">UPDATE</button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => removeTask(item.id)}>DELETE</button>
                    </div>
                </li>)
            }
        </ul>
    </div>
    </>
  )
}

export default TaskList

TaskList.propTypes = {
    tasks : PropTypes.array,
    removeTask : PropTypes.func
}