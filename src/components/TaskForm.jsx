import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setdescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className=" text 2x1 font-bold text-white"> Crea tu tarea</h1>
        <input
          placeholder="Escriba su tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
        />
        <textarea
          placeholder="Escriba la descripcion de su tarea"
          onChange={(e) => setdescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
