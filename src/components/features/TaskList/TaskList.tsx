import { RootState } from "../../../store/index";
import { useSelector } from "react-redux";
import { TaskItem } from "../TaskItem/TaskItem";

export function Tasklist() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul className="flex flex-col h-full m-auto bg-white p-6 rounded-t-3xl gap-y-4">
      {todos.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
