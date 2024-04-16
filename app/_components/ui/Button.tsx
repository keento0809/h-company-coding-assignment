"use client";

import styles from "@/app/_components/styles/button.module.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
