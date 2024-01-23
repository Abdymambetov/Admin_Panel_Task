import Head from "../../components/Comands/Head/Head";
import cls from "./MainPage.module.css";
import Users from "../../components/Comands/Users/Users";

const MainPage = () => {
  return (
    <div className={cls.main}>
      <Head />
      <Users />
    </div>
  );
};

export default MainPage;
