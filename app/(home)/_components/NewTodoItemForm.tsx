import { Button } from "@/app/_components/ui/button/Button";
import { TextInput } from "@/app/_components/ui/input/TextInput";
import styles from "@/app/(home)/styles/newTodoItemForm.module.css";
import { FC } from "react";
import { useTodoContext } from "@/app/context/todoContext";

export const NewTodoItemForm: FC = () => {
  const { handleAddNewTodo, handleChangeTodoTitle, newTodoTitle } =
    useTodoContext();
  return (
    <form onSubmit={handleAddNewTodo} className={styles.formContainer}>
      <div className={styles.formTitleSection}>
        <label htmlFor="taskTitle">Title</label>
        <TextInput
          id="taskTitle"
          onChange={(e) => handleChangeTodoTitle(e, "NEW")}
          value={newTodoTitle}
        />
      </div>
      <div className={styles.formActionButtons}>
        <Button text="Add" type="submit" />
      </div>
    </form>
  );
};
