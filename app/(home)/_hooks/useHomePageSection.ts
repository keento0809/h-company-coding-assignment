import { useState } from "react";
import { Todo } from "../_components/TodoList";

export type TodoType = "NEW" | "EDIT";

export const useHomePageSection = () => {
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

  const handleAddNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoTitle.trim() === "") throw new Error("New task title is empty.");

    const newTodo = {
      id: String(todos.length + 1),
      title: newTodoTitle,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setNewTodoTitle("");
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

  return {
    isModalOpen,
    closeModal,
    todos,
    newTodoTitle,
    editingTodo,
    handleChangeTodoTitle,
    handleAddNewTodo,
    handleOpenEditTodoModal,
    handleToggleIsDone,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};
