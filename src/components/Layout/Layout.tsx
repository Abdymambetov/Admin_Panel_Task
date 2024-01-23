import { FC } from "react";
import Sidebar from "../Sidebar/Sidebar";
import cls from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className={cls.wrapper}>
      <Sidebar />
      <div className={cls.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
