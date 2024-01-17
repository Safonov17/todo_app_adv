import create from "zustand";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updatedTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}
