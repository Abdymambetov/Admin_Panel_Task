import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
}

const Button: FC<IButton> = ({
  children,
  width,
  height,
  borderRadius,
  ...otherProps
}) => {
  return (
    <button
      className={cls.button}
      style={{ width, height, borderRadius }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
