import { Modal } from "@/app/_components/ui/modal/Modal";
import styles from "@/app/(home)/styles/editTaskModal.module.css";
import { Button } from "@/app/_components/ui/button/Button";
import { TextInput } from "@/app/_components/ui/input/TextInput";
import { useTodoContext } from "@/app/context/todoContext";

export const EditTodoModal = () => {
  const { closeModal, handleUpdateTodo, editingTodo, handleChangeTodoTitle } =
    useTodoContext();
  return (
    <Modal onClose={closeModal}>
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
