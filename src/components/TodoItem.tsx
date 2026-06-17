import Button from "./Button";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  task: Task;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
};

const TodoItem = ({ task, onDeleteTask, onToggleTask }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <span
        onClick={() => onToggleTask(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
      >
        {task.text}
      </span>

      <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
