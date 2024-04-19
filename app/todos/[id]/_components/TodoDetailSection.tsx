"use client";

import styles from "@/app/todos/[id]/styles/todoDetailSection.module.css";
import { useTodoDetailSection } from "../_hooks/useTodoDetailSection";
import { useTodoContext } from "@/app/context/todoContext";
import { Button } from "@/app/_components/ui/button/Button";

export const TodoDetailSection = () => {
  const { router, redirect, path } = useTodoDetailSection();
  const { todos } = useTodoContext();

  const correspondingTodo = todos.find((todo) => todo.id === path);

  if (!correspondingTodo) redirect("/");

  return (
    <div className={styles.container}>
      <h2>Todo Detail - {correspondingTodo?.id}</h2>
      <div className={styles.todoContentsSection}>
        <div className={styles.todoContent}>
          <h3 className={styles.contentTitle}>Todo title: </h3>
          <p>{correspondingTodo?.title ?? ""}</p>
        </div>
        <div className={styles.todoContent}>
          <h3 className={styles.contentTitle}>IsDone: </h3>
          <p>{correspondingTodo?.isDone ? "Yes" : "Not yet"}</p>
        </div>
      </div>
      <div className={styles.actionButtonSection}>
        <Button text="Back" onClick={() => router.back()} />
      </div>
    </div>
  );
};
