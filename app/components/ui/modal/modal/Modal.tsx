"use client";

import styles from "@/app/components/ui/modal/modal/modal.module.css";
import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return <div className={styles.modal}>{children}</div>;
};
