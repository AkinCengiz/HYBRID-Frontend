import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskList from "./TaskList";

function TaskForm() {
    const emptyForm = { task : "", important : false};
    const [formData,setFormData] = useState(emptyForm);
    const [tasks,setTasks] = useState([]);

    function removeTask(id){
        //console.log(id);
        setTasks(prev => prev.filter(task => task.id !== id));
    }
    function handleInputChange(e){
        setFormData(prev => {
            return{...prev,
                [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value}          

        });

        //console.log(formData);
        // e.target.type === "checkbox" ? console.log(e.target.checked) : console.log(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        //console.log(formData);
        //setTasks(tasks.push(formData)); => HATALI KULLANIM
        if(formData.task.length >=3){
            formData.id = uuidv4();
            setTasks(prev => [formData,...prev] ) //DOĞRU KULLANIM
            setFormData(emptyForm);
            e.target.reset();
        }
        //console.log(tasks);
    }

    // const numbers = [1,2,3,4];
    // const numbers2 = [5,4,3,2,...numbers,5,6,...numbers];
    // console.log(numbers);
    // console.log(numbers2);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="task" className="col-sm-2 col-form-label">
            Task
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="task" name="task" onChange={handleInputChange} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="important"
                name="important"
                defaultChecked
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="important">
                Important
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Save
        </button>
      </form>
        <TaskList tasks={tasks} removeTask={removeTask}/>
    </>
  );
}

export default TaskForm;
