import TaskForm from "./TaskForm"

function App() {
  

  return (
    <>
    <div className="container p-3 bg-secondary">
      <h1>To-Do List</h1>
      <div className="row justify-content-center mt-3">
        <div className="col-8 bg-danger p-3 rounded">
          <TaskForm/>
        </div>
      </div>      
    </div>
    </>
  )
}

export default App
