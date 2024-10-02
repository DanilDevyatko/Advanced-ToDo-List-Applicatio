import { Header } from "./components/features/Header/Header";
import { Tasklist } from "./components/features/TaskList/TaskList";
import Button from "./components/common/Button/Button";
import { TaskAddForm } from "./components/features/TaskAddForm/TaskAddForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <div className="h-screen transition-colors duration-300">
      <Header />
      <div className="h-full m-auto bg-white p-6 rounded-t-3xl ">
        {isAddingTask ? (
          <TaskAddForm onClose={() => setIsAddingTask(false)} />
        ) : (
          <div className="flex items-center justify-end mb-6 h-20 mr-4">
            <Button onClick={() => setIsAddingTask(true)}>Add</Button>
          </div>
        )}

        <Tasklist />
      </div>
    </div>
  );
}

export default App;
