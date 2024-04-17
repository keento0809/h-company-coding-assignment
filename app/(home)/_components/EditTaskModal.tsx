import { Modal } from "@/app/_components/ui/modal/Modal";
import styles from "@/app/(home)/styles/editTaskModal.module.css";
import { Button } from "@/app/_components/ui/button/Button";
import { TextInput } from "@/app/_components/ui/input/TextInput";

type EditTaskModalProps = {
  onClose: () => void;
};

export const EditTaskModal = ({ onClose }: EditTaskModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitleSection}>
          <h4>Title</h4>
          <TextInput />
        </div>
        <div className={styles.modalActionButtons}>
          <Button text="Back" onClick={onClose} />
          <Button text="Update" onClick={() => {}} />
        </div>
      </div>
    </Modal>
  );
};
