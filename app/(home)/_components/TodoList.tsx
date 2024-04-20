"use client";

import styles from "@/app/(home)/styles/todoList.module.css";
import { TodoItem } from "./TodoItem";
import { FC } from "react";
import { useTodoContext } from "@/app/context/todoContext";

export const TodoList: FC = () => {
  const { todos } = useTodoContext();
  return (
    <ul className={styles.todoListContainer}>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};
