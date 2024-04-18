import { Button } from "@/app/_components/ui/button/Button";
import { TextInput } from "@/app/_components/ui/input/TextInput";
import styles from "@/app/(home)/styles/newTodoItemForm.module.css";
import { FC } from "react";
import { TodoType } from "../_hooks/useHomePageSection";

type NewTodoItemFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    todoType: TodoType
  ) => void;
  taskTitle: string;
};

export const NewTodoItemForm: FC<NewTodoItemFormProps> = ({
  onSubmit,
  onChange,
  taskTitle,
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <div className={styles.formTitleSection}>
        <label htmlFor="taskTitle">Title</label>
        <TextInput
          id="taskTitle"
          onChange={(e) => onChange(e, "NEW")}
          value={taskTitle}
        />
      </div>
      <div className={styles.formActionButtons}>
        <Button text="Add" type="submit" />
      </div>
    </form>
  );
};
