import Button from "../../common/Button/Button";
import { removeTask, toggleTask } from "../../../store/todo/slice";
import { useAppDispatch } from "../../../hooks";
import { Task } from "../../../store/todo/slice";

export function TaskItem({ task }: { task: Task }) {
  const dispatch = useAppDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <li
      key={task.id}
      className="flex items-center justify-between bg-main p-4 rounded-3xl shadow-lg"
    >
      <input
        className="mr-2"
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTask}
      />
      <span className="grow text-lg leading-none text-mainText">
        {task.title}
      </span>
      <Button onClick={handleRemoveTask}>Delete</Button>
    </li>
  );
}
