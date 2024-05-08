"use client";

import styles from "@/app/(home)/homePageSection/homePageSection.module.css";
import { TodoList } from "../todoList/TodoList";
import { EditTodoModal } from "../editTodoModal/EditTodoModal";
import { NewTodoItemForm } from "../newTodoItem/NewTodoItemForm";
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
