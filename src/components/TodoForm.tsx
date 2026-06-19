import { useState } from "react";
import Button from "./Button";

type TodoFormProps = {
  onAddTasks: (task: string) => void;
};

const TodoForm = ({ onAddTasks }: TodoFormProps) => {
  const [taskText, setTaskTest] = useState("");

  const handleAddTask = () => {
    if (!taskText.trim()) return; // if there is no text inputted, it becomes an empty string

    onAddTasks(taskText);
    setTaskTest("");
  };
  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskTest(e.target.value)}
        placeholder="Enter a task..."
        className="border rounded px-3 py-2"
      />

      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default TodoForm;
