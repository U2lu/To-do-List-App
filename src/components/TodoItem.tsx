import Button from "./Button";

type Task = {
  //states the characteristics of Task
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  task: Task;
  onDeleteTask: (id: number) => void; //deletes the id of each task
  onToggleTask: (id: number) => void; //toggles the id of the task
};

const TodoItem = ({ task, onDeleteTask, onToggleTask }: TodoItemProps) => {
  //destructuring of the props
  return (
    //the styling in the div is used to arrange items in a row or horizontal manner
    <div className="flex items-center gap-3">
      <span
        className={`cursor-pointer ${task.completed ? "line-through" : ""}`} //used to show when a task has been completed to strike a line across it.
      >
        <input //on click of the checkbox, it would strikethrough the task to show it has been completed.
          type="checkbox"
          onClick={() => onToggleTask(task.id)}
          className="mr-2"
        />
        {task.text}
      </span>

      <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
    </div> //handles the deleting of tasks.
  );
};

export default TodoItem;
