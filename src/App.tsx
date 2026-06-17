import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 gap-8">
      <h1 className="text-4xl font-extrabold">Todo App</h1>

      <TodoForm onAddTasks={addTask} />

      <TodoList
        tasks={tasks}
        onDeleteTasks={deleteTask}
        onToggleTasks={toggleTask}
      />
    </div>
  );
}

export default App;
