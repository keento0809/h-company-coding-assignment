"use client";

import styles from "@/app/todos/[id]/todoDetailSection/todoDetailSection.module.css";
import { useTodoDetailSection } from "../../_hooks/useTodoDetailSection";
import { useTodoContext } from "@/app/context/todoContext";
import { Button } from "@/app/components/ui/button/button/Button";

export const TodoDetailSection = () => {
  const { router, redirect, path } = useTodoDetailSection();
  const { todos } = useTodoContext();

  const correspondingTodo = todos.find((todo) => todo.id === path);

  if (!correspondingTodo) redirect("/");

  return (
    <div className={styles.container}>
      <h2>Todo Detail</h2>
      <div className={styles.todoContentsSection}>
        <div className={styles.todoContent}>
          <h4 className={styles.contentTitle}>Todo title: </h4>
          <p>{correspondingTodo?.title ?? ""}</p>
        </div>
        <div className={styles.todoContent}>
          <h4 className={styles.contentTitle}>IsDone: </h4>
          <p>{correspondingTodo?.isDone ? "Yes" : "Not yet"}</p>
        </div>
      </div>
      <div className={styles.actionButtonSection}>
        <Button text="Back" bgColor="gray" onClick={() => router.back()} />
      </div>
    </div>
  );
};
