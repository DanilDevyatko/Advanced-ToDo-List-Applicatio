import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import { removeTask, toggleTask } from "../../../redux/todo/todoSlice";
export function Tasklist() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul className="flex flex-col h-full m-auto bg-white p-6 rounded-t-3xl gap-y-4">
      {todos.tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-main p-4 rounded-3xl shadow-lg"
        >
          <input
            className="mr-2"
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <span className="grow text-lg text-mainText">{task.title}</span>
          <Button onClick={() => dispatch(removeTask(task.id))}>Delete</Button>
        </li>
      ))}
    </ul>
  );
}
