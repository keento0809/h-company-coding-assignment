import { Modal } from "@/app/_components/ui/modal/Modal";
import styles from "@/app/(home)/styles/editTaskModal.module.css";
import { Button } from "@/app/_components/ui/button/Button";
import { TextInput } from "@/app/_components/ui/input/TextInput";
import { Todo } from "./TodoList";
import { TodoType } from "../_hooks/useHomePageSection";

type EditTodoModalProps = {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    todoType: TodoType
  ) => void;
  onUpdate: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  editingTodo: Todo | null;
};

export const EditTodoModal = ({
  onChange,
  onUpdate,
  onClose,
  editingTodo,
}: EditTodoModalProps) => {
  return (
    <Modal onClose={onClose}>
      <form className={styles.modalContainer} onSubmit={onUpdate}>
        <div className={styles.modalTitleSection}>
          <label htmlFor="todoTitle">Title</label>
          <TextInput
            id="todoTitle"
            type="text"
            name="title"
            defaultValue={editingTodo ? editingTodo.title : ""}
            onChange={(e) => onChange(e, "EDIT")}
          />
        </div>
        <div className={styles.modalActionButtons}>
          <Button type="button" text="Back" onClick={onClose} />
          <Button type="submit" text="Update" />
        </div>
      </form>
    </Modal>
  );
};
