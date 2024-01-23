import AddUser from "../AddUser/AddUser";
import SearchUser from "../SearchUser/SearchUser";
import cls from "./Head.module.css";

const Head = () => {
  return (
    <div className={cls.head}>
      <h3 className={cls.title}>Команда</h3>
      <div className={cls.tools}>
        <SearchUser />
        <AddUser />
      </div>
    </div>
  );
};

export default Head;
