import styles from "@/app/(home)/styles/homePageSection.module.css";
import { TodoList } from "./TodoList";

export const HomePageSection = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h2>TodoList</h2>
        <TodoList />
      </div>
    </main>
  );
};
