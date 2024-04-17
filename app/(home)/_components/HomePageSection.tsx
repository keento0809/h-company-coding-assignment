"use client";

import styles from "@/app/(home)/styles/homePageSection.module.css";
import { TodoList } from "./TodoList";
import { EditTaskModal } from "./EditTaskModal";
import { useHomePageSection } from "../_hooks/useHomePageSection";
import { NewTodoItemForm } from "./NewTodoItemForm";

export const HomePageSection = () => {
  const {
    isModalOpen,
    closeModal,
    todos,
    newTodoTitle,
    handleChangeNewTodoTitle,
    handleDeleteTodo,
    onSubmit,
  } = useHomePageSection();
  return (
    <main className={styles.wrapper}>
      {isModalOpen && <EditTaskModal onClose={closeModal} />}
      <div className={styles.container}>
        <h2>TodoList</h2>
        <NewTodoItemForm
          onSubmit={onSubmit}
          onChange={handleChangeNewTodoTitle}
          taskTitle={newTodoTitle}
        />
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
    </main>
  );
};
