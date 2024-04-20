"use client";

import { ComponentProps } from "react";
import styles from "../../styles/button.module.css";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
  bgColor: "red" | "blue" | "purple" | "gray";
  conditionalStyles?: { [key: string]: string };
};

export const Button = ({
  text,
  bgColor,
  conditionalStyles,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ borderColor: bgColor, ...conditionalStyles }}
    >
      {text}
    </button>
  );
};
