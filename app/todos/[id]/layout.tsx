import { ReactNode } from "react";
import styles from "@/app/todos/[id]/layout.module.css";

export default function TodoItemLayout({ children }: { children: ReactNode }) {
  return <main className={styles.wrapper}>{children}</main>;
}
