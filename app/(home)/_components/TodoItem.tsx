import { Todo } from "./TodoList";
import { Button } from "@/app/_components/ui/button/Button";
import styles from "@/app/(home)/styles/todoItem.module.css";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={styles.todoItemContainer}>
      <div>
        <span className={styles.todoItemTitle}>{todo.title}</span>
      </div>
      <div className={styles.todoItemActionButtons}>
        <Button text="Detail" onClick={() => {}} />
        <Button text="Edit" onClick={() => {}} />
        <Button text="Delete" onClick={() => {}} />
      </div>
    </li>
  );
};
