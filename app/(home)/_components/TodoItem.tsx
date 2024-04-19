import { Todo } from "@/app/context/todoContext";
import { Button } from "@/app/_components/ui/button/Button";
import styles from "@/app/(home)/styles/todoItem.module.css";
import { useRouter } from "next/navigation";
import { useTodoContext } from "@/app/context/todoContext";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const router = useRouter();
  const { handleToggleIsDone, handleOpenEditTodoModal, handleDeleteTodo } =
    useTodoContext();
  return (
    <li className={styles.todoItemContainer}>
      <div className={styles.todoItemTitleSection}>
        <input
          type="checkbox"
          checked={todo.isDone}
          readOnly
          onClick={() => handleToggleIsDone(todo)}
        />
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
          bgColor="purple"
          onClick={() => router.push(`/todos/${todo.id}`)}
        />
        <Button
          text="Edit"
          bgColor="blue"
          onClick={() => handleOpenEditTodoModal(todo.id)}
        />
        <Button
          text="Delete"
          bgColor="red"
          onClick={() => handleDeleteTodo(todo.id)}
        />
      </div>
    </li>
  );
};
