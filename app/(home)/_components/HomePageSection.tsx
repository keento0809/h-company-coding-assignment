"use client";

import styles from "@/app/(home)/styles/homePageSection.module.css";
import { TodoList } from "./TodoList";
import { EditTaskModal } from "./EditTaskModal";
import { useHomePageSection } from "../_hooks/useHomePageSection";

export const HomePageSection = () => {
  const { isModalOpen, closeModal } = useHomePageSection();
  return (
    <main className={styles.wrapper}>
      {isModalOpen && <EditTaskModal onClose={closeModal} />}
      <div className={styles.container}>
        <h2>TodoList</h2>
        <TodoList />
      </div>
    </main>
  );
};
