import { useState } from "react";
import { Todo } from "../_components/TodoList";

export const useHomePageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editingTodoTitle, setEditingTodoTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
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

  const handleEditTodo = (id: string) => {
    setIsModalOpen(true);
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo) {
      setEditingTodo(editTodo);
    } else throw new Error("Failed to get todoItem");
  };

  const handleChangeEditingTodoTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditingTodoTitle(e.target.value);
  };

  const handleUpdateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingTodoTitle.trim() === "")
      throw new Error("Editing task title is empty.");
    if (!editingTodo) throw new Error("Failed to update todo");

    const updatedTodo: Todo = { ...editingTodo, title: editingTodoTitle };
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setIsModalOpen(false);
    setEditingTodoTitle("");
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...updatedTodos]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    todos,
    newTodoTitle,
    editingTodo,
    handleAddNewTodo,
    handleEditTodo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleChangeNewTodoTitle,
    handleChangeEditingTodoTitle,
  };
};
