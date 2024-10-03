import { RootState } from "../../../store";
import { useAppSelector } from "../../../hooks";
import { TaskItem } from "../TaskItem/TaskItem";

export function Tasklist() {
  const todos = useAppSelector((state: RootState) => state.todos);

  return (
    <ul className="flex flex-col gap-y-6">
      {todos.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
