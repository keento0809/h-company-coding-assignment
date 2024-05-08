"use client";

import { ComponentProps } from "react";
import styles from "@/app/components/ui/button/button/button.module.css";

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
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={{ borderColor: bgColor, ...conditionalStyles }}
    >
      {text}
    </button>
  );
};
