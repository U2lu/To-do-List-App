import TodoItem from "./TodoItem";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TodolistProps = {
  tasks: Task[];
  onDeleteTasks: (id: number) => void;
  onToggleTasks: (id: number) => void;
};

const TodoList = ({ tasks, onDeleteTasks, onToggleTasks }: TodolistProps) => {
  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTasks}
          onToggleTask={onToggleTasks}
        />
      ))}
    </div>
  );
};

export default TodoList;
