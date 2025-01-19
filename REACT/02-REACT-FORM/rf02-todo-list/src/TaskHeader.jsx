import PropTypes from "prop-types"

function TaskHeader({important,handleTasksFilter}) {
  return (
    <>
        <h4>Task List 
            <button className={`btn btn-sm ${important ? "btn-dark" : "btn-light"} mb-3 float-end`} onClick={handleTasksFilter}>
                {!important ? "Get Important" : "Get All Tasks"}                
            </button>
        </h4>
    </>
  )
}

export default TaskHeader

TaskHeader.propTypes = {
    important : PropTypes.bool,
    handleTasksFilter : PropTypes.func
}