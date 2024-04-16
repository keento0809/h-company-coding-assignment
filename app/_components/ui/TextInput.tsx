import { ComponentProps } from "react";

type TextInputProps = ComponentProps<"input">;

export const TextInput = ({ onChange, ...props }: TextInputProps) => {
  return <input type="text" onChange={onChange} {...props} />;
};
