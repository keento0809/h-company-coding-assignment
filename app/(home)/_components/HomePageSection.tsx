"use client";

import styles from "@/app/(home)/styles/homePageSection.module.css";
import { TodoList } from "./TodoList";
import { EditTodoModal } from "./EditTodoModal";
import { useHomePageSection } from "../_hooks/useHomePageSection";
import { NewTodoItemForm } from "./NewTodoItemForm";

export const HomePageSection = () => {
  const {
    isModalOpen,
    closeModal,
    todos,
    newTodoTitle,
    editingTodo,
    handleChangeTodoTitle,
    handleAddNewTodo,
    handleOpenEditTodoModal,
    handleUpdateTodo,
    handleDeleteTodo,
  } = useHomePageSection();
  return (
    <main className={styles.wrapper}>
      {isModalOpen && (
        <EditTodoModal
          onClose={closeModal}
          onUpdate={handleUpdateTodo}
          editingTodo={editingTodo}
          onChange={handleChangeTodoTitle}
        />
      )}
      <div className={styles.container}>
        <h2>TodoList</h2>
        <NewTodoItemForm
          onSubmit={handleAddNewTodo}
          onChange={handleChangeTodoTitle}
          taskTitle={newTodoTitle}
        />
        <TodoList
          todos={todos}
          onEdit={handleOpenEditTodoModal}
          onDelete={handleDeleteTodo}
        />
      </div>
    </main>
  );
};
