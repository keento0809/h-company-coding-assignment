"use client";

import styles from "@/app/(home)/styles/todoList.module.css";
import { TodoItem } from "./TodoItem";
import { FC } from "react";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
};

export const TodoList: FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul className={styles.todoListContainer}>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />;
      })}
    </ul>
  );
};
