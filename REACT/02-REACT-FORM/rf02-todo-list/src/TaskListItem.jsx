import PropTypes from "prop-types";

function TaskListItem({ editTask, removeTask, item }) {
  return (
    <li className="list-group-item">
      {item.task}{" "}
      {item.important ? (<span className="badge text-bg-danger">Important</span>) : ("")}
      <div className="btn-group float-end" role="group">
        <button type="button" className="btn btn-sm btn-success" onClick={() => editTask(item.id)}>UPDATE </button>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => removeTask(item.id)}
        >
          DELETE
        </button>
      </div>
    </li>
  );
}

export default TaskListItem;

TaskListItem.propTypes = {
  editTask: PropTypes.func,
  removeTask: PropTypes.func,
  item: PropTypes.object,
};
