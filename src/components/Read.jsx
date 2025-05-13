import { useState } from "react";
import Create from "./Create";

const Read = (props) => {
  const { todo } = props;
  const [open, setOpen] = useState(false);

  // Get today's date
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const day = today.getDate();
  const monthName = today.toLocaleDateString("en-US", { month: "long" });

  // Helper to get ordinal suffix
  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="absolute left-3 top-3 text-5xl font-bold text-black/80">To-Do List</h1>
      <div
        className={`rounded-xl shadow-md  w-[90%] md:w-100  p-5 pb-12 min-h-[20rem] relative transition-colors duration-300 ${
          open ? "bg-gray-400" : "bg-white"
        }`}
      >
        {/* Header with dynamic date */}
        <div className="mb-4">
          <h2 className="text-emerald-600 text-2xl font-semibold">
            {dayName},{" "}
            <span className="font-bold">
              {day}
              <sup className="text-xs">{getOrdinal(day)}</sup>
            </span>
          </h2>
          <p className="text-gray-500 text-sm">{monthName}</p>
          <p className="text-gray-400 text-xs mt-1">{todo.length} Tasks</p>
        </div>

        {/* Task List */}
        <ul className="space-y-3 text-sm">
          {todo.map((task) => (
            <li key={task.id} className="flex justify-between items-center w-full">
              <div className="checkbox-wrapper-11 w-full">
                <input
                  id={`task-${task.id}`}
                  type="checkbox"
                  defaultChecked={task.checked}
                  className="mr-2"
                />
                <label htmlFor={`task-${task.id}`} className="">
                          <div className="flex text-[1.1rem] justify-between w-full">
                              {task.title}
                    <p className="opacity-35">{task.time}</p>
                  </div>
                  
                </label>
              </div>
            </li>
          ))}
        </ul>

        {open ? <Create todo={props} /> : ""}

        {/* Floating Add Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            open
              ? "bg-red-400 hover:bg-red-600"
              : "bg-green-400 hover:bg-green-600"
          }`}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="12"
              y1="5"
              x2="12"
              y2="19"
              className={`transition-transform duration-300 origin-center ${
                open ? "rotate-45" : "rotate-0"
              }`}
            />
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className={`transition-transform duration-300 origin-center ${
                open ? "rotate-45" : "rotate-0"
              }`}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Read;
