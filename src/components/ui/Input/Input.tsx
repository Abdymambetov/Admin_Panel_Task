import { FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.css";

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  height?: string | number;
  padding?: string;
  className?: string;
}
const Input: FC<Iinput> = ({
  width,
  height,
  padding,
  className = "",
  ...otherProps
}) => {
  return (
    <input
      className={`${cls.input} ${className}`}
      style={{ width, height, padding }}
      {...otherProps}
    />
  );
};

export default Input;
