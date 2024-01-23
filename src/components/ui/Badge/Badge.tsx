import { FC, ReactNode } from "react";
import cls from "./Badge.module.css";

interface IBadge {
  children: ReactNode;
  variant?: "admin" | "";
}

const Badge: FC<IBadge> = ({ children, variant = "" }) => {
  return (
    <span className={`${cls.badge} ${cls[variant]} typography-3 `}>
      {children}
    </span>
  );
};

export default Badge;
