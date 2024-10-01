import Button from "../../common/Button/Button";
import { removeTask, toggleTask } from "../../../store/todo/slice";
import { useDispatch } from "react-redux";

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

export function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch();
  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id));
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
        onChange={() => {
          handleToggleTask(task.id);
        }}
      />
      <span className="grow text-lg text-mainText">{task.title}</span>
      <Button onClick={() => handleRemoveTask(task.id)}>Delete</Button>
    </li>
  );
}
