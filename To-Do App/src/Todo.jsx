import Input from "./components/Input.jsx";

function Todo() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center bg-slate-900 pt-8">
      <div className="w-2/3 h-auto">
        <div className="w-full text-white text-5xl text-center mb-9 font-semibold font-sans ">
          To-Do List
        </div>
        <div className="h-auto w-full bg-red-400  text-lg font-semibold font-sans px-10 py-4">
            <Input />
        </div>
      </div>
    </div>
  );
}
export default Todo