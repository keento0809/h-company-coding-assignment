"use client";

import styles from "@/app/_components/styles/modal.module.css";
import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: ModalProps) => {
  return <div className={styles.modal}>{children}</div>;
};
