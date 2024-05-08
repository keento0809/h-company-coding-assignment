"use client";

import { ComponentProps } from "react";
import styles from "@/app/_components/ui/input/textInput/textInput.module.css";

type TextInputProps = ComponentProps<"input">;

export const TextInput = ({ onChange, ...props }: TextInputProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      {...props}
      className={styles.textInput}
    />
  );
};
