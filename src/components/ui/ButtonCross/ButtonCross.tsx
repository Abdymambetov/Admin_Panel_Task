import { ButtonHTMLAttributes, FC } from "react";
import CrossIcon from "../../../assets/icons/krestik.svg?react";
import cls from "./ButtonCross.module.css";

interface IButtonKrestik extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonCross: FC<IButtonKrestik> = ({ className, ...otherProps }) => {
  return (
    <button className={`${cls.button} ${className}`} {...otherProps}>
      <CrossIcon/>
    </button>
  );
};

export default ButtonCross;
