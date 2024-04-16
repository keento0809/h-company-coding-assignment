import styles from "@/app/todos/[id]/styles/todoDetailSection.module.css";

export const TodoDetailSection = () => {
  return (
    <div className={styles.container}>
      {/* This dummy title should be replaced later */}
      <h3 className={styles.todoTitle}>Todo title</h3>
    </div>
  );
};
