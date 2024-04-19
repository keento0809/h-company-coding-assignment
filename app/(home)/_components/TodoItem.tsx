import { Todo } from "./TodoList";
import { Button } from "@/app/_components/ui/button/Button";
import styles from "@/app/(home)/styles/todoItem.module.css";
import { useRouter } from "next/navigation";

type TodoItemProps = {
  todo: Todo;
  onIsDone: (todo: Todo) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem = ({
  todo,
  onIsDone,
  onEdit,
  onDelete,
}: TodoItemProps) => {
  const router = useRouter();
  return (
    <li className={styles.todoItemContainer}>
      <div className={styles.todoItemTitleSection}>
        <input type="checkbox" onClick={() => onIsDone(todo)} />
        <span
          className={styles.todoItemTitle}
          style={{ textDecoration: todo.isDone ? "line-through " : "" }}
        >
          {todo.title}
        </span>
      </div>
      <div className={styles.todoItemActionButtons}>
        <Button
          text="Detail"
          onClick={() => router.push(`/todos/${todo.id}`)}
        />
        <Button text="Edit" onClick={() => onEdit(todo.id)} />
        <Button text="Delete" onClick={() => onDelete(todo.id)} />
      </div>
    </li>
  );
};
