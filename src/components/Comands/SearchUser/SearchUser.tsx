import Input from "../../ui/Input/Input";
import cls from "./SearchUser.module.css";
import SearchIcon from "../../../assets/icons/search.svg?react";
import { ChangeEvent, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { useUsers } from "../store/useUsers";

const SearchUser = () => {
  const { filterUsers } = useUsers();

  const [hover, setHover] = useState("");
  const [value, setValue] = useState("");
  const filterUsersDb = useDebounce(filterUsers, 500);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    filterUsersDb(e.target.value);
  };

  return (
    <label
      onMouseLeave={() => setHover(cls["input-leave"])}
      className={cls.label}
    >
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Поиск по Email"
        className={`${cls.input} ${hover}`}
      />
      <SearchIcon
        onMouseEnter={() => setHover(cls["input-enter"])}
        className={cls.icon}
      />
    </label>
  );
};

export default SearchUser;
