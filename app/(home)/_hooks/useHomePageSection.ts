import { useState } from "react";
import { Todo } from "../_components/TodoList";

export const useHomePageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    onSubmit,
    handleDeleteTodo,
    handleChangeNewTodoTitle,
  };
};
