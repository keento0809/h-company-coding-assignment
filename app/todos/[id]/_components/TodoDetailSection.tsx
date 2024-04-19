"use client";

import styles from "@/app/todos/[id]/styles/todoDetailSection.module.css";
import { useTodoDetailSection } from "../_hooks/useTodoDetailSection";

export const TodoDetailSection = () => {
  const { path } = useTodoDetailSection();
  return (
    <div className={styles.container}>
      {/* This dummy title should be replaced later */}
      <h3 className={styles.todoTitle}>Todo title</h3>
    </div>
  );
};
