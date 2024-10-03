import Button from "../../common/Button/Button";
import { addTask } from "../../../store/todo/slice";
import { useAppDispatch } from "../../../hooks";
import { useState } from "react";

export function TaskAddForm({ onClose }: { onClose: () => void }) {
  const [inputText, setInputText] = useState("");
  const dispatch = useAppDispatch();
  const handleAddTask = (text: string) => {
    // окей ли что я этими тремя строками подряд вызываю 3 рирендера. Как-то надо это оптимизировать... но как
    dispatch(addTask(text));
    setInputText("");
    onClose();
  };

  return (
    <div className="flex items-center justify-between bg-main p-4 rounded-3xl shadow-lg mb-6">
      <input
        onChange={(e) => setInputText(e.target.value)}
        className="mr-2 rounded-3xl w-full p-2 bg-white focus:outline-none"
        type="input"
        value={inputText}
      />
      <Button onClick={() => handleAddTask(inputText)}>Add</Button>
    </div>
  );
}
