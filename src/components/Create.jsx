import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  let { todo } = props.todo;
  let {setTodo} = props.todo;
  console.log(todo);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    const newTask = {
      id: nanoid(5),
      title: title.trim(),
        checked: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setTodo([...todo, newTask]);
    setTitle(""); // Clear input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bg-white w-[98%] left-1 bottom-8 p-4 rounded-lg shadow-lg border border-gray-200"
    >
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Add Task</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white px-4 py-2 rounded-md outline-none hover:bg-emerald-600 transition duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Create;
