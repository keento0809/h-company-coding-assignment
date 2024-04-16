"use client";

import styles from "@/app/(home)/styles/todoList.module.css";
import { Button } from "@/app/_components/ui/Button";

// TODO: This dummy data should be removed later
const DUMMY_TODO_ITEMS = [
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
        return (
          // This styling is temporary use
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              padding: "0.8rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #333",
              borderRadius: "10px",
            }}
          >
            <div>
              <span style={{ fontSize: "16px" }}>{todo.title}</span>
            </div>
            {/* // This styling is temporary use */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {/* TODO: onClick events should be fixed later */}
              <Button text="Detail" onClick={() => {}} />
              <Button text="Edit" onClick={() => {}} />
              <Button text="Delete" onClick={() => {}} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
