import { useState } from "react";
import Read from "./components/Read";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id:"1",
      title: "Make tea",
      checked: false,
      time:"11:10 AM"
    }
  ]);
  return (
    <>
      <Read todo={todo} setTodo={setTodo} />
    </>
  );
};

export default App;
