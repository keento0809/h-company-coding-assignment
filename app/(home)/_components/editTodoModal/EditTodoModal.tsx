import { Modal } from "@/app/components/ui/modal/modal/Modal";
import styles from "@/app/(home)/editTodoModal/editTodoModal.module.css";
import { Button } from "@/app/components/ui/button/button/Button";
import { TextInput } from "@/app/components/ui/input/textInput/TextInput";
import { useTodoContext } from "@/app/context/todoContext";

export const EditTodoModal = () => {
  const { closeModal, handleUpdateTodo, editingTodo, handleChangeTodoTitle } =
    useTodoContext();
  return (
    <Modal>
      <form className={styles.modalContainer} onSubmit={handleUpdateTodo}>
        <div className={styles.modalTitleSection}>
          <label htmlFor="todoTitle">Title</label>
          <TextInput
            id="todoTitle"
            type="text"
            name="title"
            defaultValue={editingTodo ? editingTodo.title : ""}
            onChange={(e) => handleChangeTodoTitle(e, "EDIT")}
          />
        </div>
        <div className={styles.modalActionButtons}>
          <Button
            type="button"
            text="Back"
            bgColor="gray"
            onClick={closeModal}
          />
          <Button type="submit" text="Update" bgColor="purple" />
        </div>
      </form>
    </Modal>
  );
};
