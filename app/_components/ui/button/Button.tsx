"use client";

import styles from "@/app/_components/styles/button.module.css";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
