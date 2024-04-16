"use client";

import styles from "@/app/(home)/styles/todoList.module.css";
import { TodoItem } from "./TodoItem";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

// TODO: This dummy data should be removed later
const DUMMY_TODO_ITEMS: Todo[] = [
  {
    id: "1",
    title: "Wash dishes",
    isDone: false,
  },
  {
    id: "2",
    title: "Clean my room",
    isDone: false,
  },
  {
    id: "3",
    title: "Go grocery shopping",
    isDone: false,
  },
  {
    id: "4",
    title: "Cook dinner",
    isDone: false,
  },
] as const;

export const TodoList = () => {
  return (
    <ul className={styles.todoListContainer}>
      {DUMMY_TODO_ITEMS.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};
