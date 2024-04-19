"use client";

import styles from "@/app/_components/styles/button.module.css";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
  bgColor: "red" | "blue" | "purple" | "gray";
};

export const Button = ({ text, bgColor, onClick }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ borderColor: bgColor }}
    >
      {text}
    </button>
  );
};
