import { Button } from "@/app/components/ui/button/button/Button";
import { TextInput } from "@/app/components/ui/input/textInput/TextInput";
import styles from "@/app/(home)/newTodoItemForm/newTodoItemForm.module.css";
import { FC } from "react";
import { useTodoContext } from "@/app/context/todoContext";

export const NewTodoItemForm: FC = () => {
  const { handleAddNewTodo, handleChangeTodoTitle, newTodoTitle } =
    useTodoContext();
  const isDisabled = newTodoTitle.length === 0;
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
        <Button
          text="Add"
          bgColor="purple"
          type="submit"
          disabled={isDisabled}
          conditionalStyles={{
            opacity: isDisabled ? "0.7" : "inherit",
            cursor: isDisabled ? "not-allowed" : "pointer",
          }}
        />
      </div>
    </form>
  );
};
