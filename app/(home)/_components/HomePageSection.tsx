"use client";

import styles from "@/app/(home)/styles/homePageSection.module.css";
import { TodoList } from "./TodoList";
import { EditTodoModal } from "./EditTodoModal";
import { NewTodoItemForm } from "./NewTodoItemForm";
import { useTodoContext } from "@/app/context/todoContext";

export const HomePageSection = () => {
  const { isModalOpen } = useTodoContext();
  return (
    <main className={styles.wrapper}>
      {isModalOpen && <EditTodoModal />}
      <div className={styles.container}>
        <h2>TodoList</h2>
        <NewTodoItemForm />
        <TodoList />
      </div>
    </main>
  );
};
