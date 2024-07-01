import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import { MdDelete, MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Input() {

    const [tasks, setTasks] = useState([])
const [input, setInput] = useState("");

const handleInput = (event)=>{
    setInput(event.target.value )
}
const handleUp = (index)=>{
    if(index === 0){
        toast("Can't move up", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    } else {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

const handleDown = (index)=>{
    if(index<tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
        setTasks(updatedTasks);
    } else {
        toast("Can't move below", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
}

const handleDelete = (index)=>{
    const newTasks = tasks.filter( (_, i)=> i!==index )
    setTasks(newTasks)
}

const handleEdit = (index)=>{
    const editedTask = prompt("edit: ")
    if(editedTask.trim() !== ""){
        const updatedTasks = [...tasks];
        updatedTasks[index] = editedTask;
        setTasks(updatedTasks);
    } 
}

const handleAdd = ()=>{
    if(input.trim() !== ""){
        setTasks(prevTasks=> [...prevTasks, input]);
        setInput("");
    } else {
        toast("Nothing to add", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
}

  return (
    <div>
      <div className="w-full flex justify-evenly">
        <input
          type="text"
          placeholder="Write here"
          value={input}
          onChange={handleInput}
          className="border-4 w-2/3 border-none outline-none py-1 px-2"
        />
        <MdOutlineAddCircleOutline
          onClick={handleAdd}
          className="text-4xl text-slate-900 cursor-pointer"
        />
      </div>
      <div className="w-full px-24 mt-10">
        <ol>
          {tasks.map((task, index) => (
            <>
              <li
                className="flex border-2 border-slate-400 my-3 py-2 px-3 text-3xl text-white bg-red-900"
                key={index}
              >
                <p onClick={()=>handleEdit(index)} className="w-2/3">{task}</p>
                <div className="flex w-1/3 justify-evenly">
                  <FaAngleDoubleUp onClick={() => handleUp(index)} className="cursor-pointer" />
                  <FaAngleDoubleDown onClick={() => handleDown(index)} className="cursor-pointer" />
                  <MdDelete onClick={() => handleDelete(index)} className="cursor-pointer" />
                </div>
              </li>
            </>
          ))}
        </ol>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Input;
