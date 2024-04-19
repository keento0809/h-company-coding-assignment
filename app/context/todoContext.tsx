"use client";

import axios from "axios";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoType = "NEW" | "EDIT";

type TodoContextType = {
  todos: Todo[];
  newTodoTitle: string;
  editingTodo: Todo | null;
  handleChangeTodoTitle: (
    e: React.ChangeEvent<HTMLInputElement>,
    todoType: TodoType
  ) => void;
  isModalOpen: boolean;
  handleAddNewTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOpenEditTodoModal: (id: string) => void;
  handleToggleIsDone: (todo: Todo) => void;
  handleUpdateTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteTodo: (id: string) => void;
  closeModal: () => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeTodoTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    todoType: TodoType
  ) => {
    switch (todoType) {
      case "NEW":
        setNewTodoTitle(e.target.value);

      case "EDIT":
        setEditingTodo((prev) => {
          if (prev) {
            return { ...prev, title: e.target.value };
          }
          return null;
        });

      default:
        return;
    }
  };

  const handleAddNewTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoTitle.trim() === "") throw new Error("New task title is empty.");

    const newTodo = {
      id: String(todos.length + 1),
      title: newTodoTitle,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setNewTodoTitle("");
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleOpenEditTodoModal = (id: string) => {
    setIsModalOpen(true);
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo) {
      setEditingTodo(editTodo);
    } else throw new Error("Failed to get editTodoItem");
  };

  const handleToggleIsDone = (todo: Todo) => {
    const updatedTodo: Todo = { ...todo, isDone: !todo.isDone };
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleUpdateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingTodo || editingTodo?.title.trim() === "")
      throw new Error("Failed to update todo...");

    setTodos(
      todos.map((todo) => (todo.id === editingTodo?.id ? editingTodo : todo))
    );
    setIsModalOpen(false);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...updatedTodos]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchTodos = async () => {
    const response = await axios.get<Todo[]>("/api/todos");
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodoTitle,
        editingTodo,
        isModalOpen,
        handleChangeTodoTitle,
        handleAddNewTodo,
        handleOpenEditTodoModal,
        handleToggleIsDone,
        handleUpdateTodo,
        handleDeleteTodo,
        closeModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("Provide correct context");

  return context;
};
