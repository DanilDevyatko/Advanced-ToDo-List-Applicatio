import { Header } from "./components/features/Header/Header";
import { Tasklist } from "./components/features/TaskList/TaskList";
import Button from "./components/common/Button/Button";
import { TaskAddForm } from "./components/features/TaskAddForm/TaskAddForm";
import "./App.css";
import { useEffect, useState } from "react";
import { useAppSelector } from "./hooks";
import { RootState } from "./store";
import { useAppDispatch } from "./hooks";
import { addTasksLocalStorage } from "./store/todo/slice";

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    dispatch(addTasksLocalStorage());
  }, [dispatch]);

  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    if (todos.tasks.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos.tasks));
    }
  }, [todos]);

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
