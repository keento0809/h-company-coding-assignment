import { Button } from "@/app/_components/ui/button/Button";
import { TextInput } from "@/app/_components/ui/input/TextInput";
import styles from "@/app/(home)/styles/newTodoItemForm.module.css";

export const NewTodoItemForm = () => {
  return (
    <form onSubmit={() => {}} className={styles.formContainer}>
      <div className={styles.formTitleSection}>
        <label htmlFor="taskTitle">Title</label>
        <TextInput id="taskTitle" />
      </div>
      <div className={styles.formActionButtons}>
        <Button text="Add" type="submit" />
      </div>
    </form>
  );
};
