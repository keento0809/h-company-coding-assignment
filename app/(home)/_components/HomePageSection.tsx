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
    handleChangeNewTodoTitle,
    handleChangeEditingTodoTitle,
    handleAddNewTodo,
    handleEditTodo,
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
          onChange={handleChangeEditingTodoTitle}
        />
      )}
      <div className={styles.container}>
        <h2>TodoList</h2>
        <NewTodoItemForm
          onSubmit={handleAddNewTodo}
          onChange={handleChangeNewTodoTitle}
          taskTitle={newTodoTitle}
        />
        <TodoList
          todos={todos}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </main>
  );
};
