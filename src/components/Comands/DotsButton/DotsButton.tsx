import DotsIcon from "@/assets/icons/dots.svg?react";
import cls from "./DotsButton.module.css";
import { Flex, Popover } from "@radix-ui/themes";
import { FC, useState } from "react";
import Alert from "@/components/ui/Alert/Alert";
import Permission from "../Permission/Permission";
import { IUser, useUsers } from "../store/useUsers";
import { useAlertOpen } from "../store/useAlertOpen";

interface IDotsButton {
  user: IUser;
}

const DotsButton: FC<IDotsButton> = ({ user }) => {
  const [popOpen, setPopOpen] = useState(false);
  const [permissionOpen, setPermissionOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertAdminOpen, setAlertAdminOpen] = useState(false);
  const { setAlertOpen: setAlertDeleteOpen } = useAlertOpen();
  const { changePermission, deleteUser } = useUsers();

  const handleGetPermission = (param: string[]) => {
    changePermission({ ...user, permissions: param });
  };

  const isAdmin = user.permissions.includes("Администратор");

  const handleClickSendAgain = () => {
    setPopOpen(false);
    if (isAdmin) return setAlertAdminOpen(true);
    setAlertOpen(true);
  };

  const handleClickDelete = () => {
    setPopOpen(false);
    if (isAdmin) return setAlertAdminOpen(true);
    setAlertDeleteOpen(true);
    deleteUser(user.email);
  };

  return (
    <>
      <Popover.Root open={popOpen} onOpenChange={(open) => setPopOpen(open)}>
        <Popover.Trigger>
          <button className={cls.button}>
            <DotsIcon />
          </button>
        </Popover.Trigger>
        <Popover.Content className={cls.popover}>
          <Flex direction="column" gap="4" align="start">
            <Popover.Root
              open={permissionOpen}
              onOpenChange={(open) => setPermissionOpen(open)}
            >
              <Popover.Trigger>
                <button
                  onClick={() => setPermissionOpen(true)}
                  className="typography-1-light"
                >
                  Изменить права доступа
                </button>
              </Popover.Trigger>
              <Popover.Content className={cls.popover}>
                <Permission
                  getPermission={handleGetPermission}
                  permissionsData={user.permissions}
                />
              </Popover.Content>
            </Popover.Root>
            <button
              onClick={handleClickSendAgain}
              className="typography-1-light"
            >
              Отправить код повторно
            </button>
            <button onClick={handleClickDelete} className={cls.button_delete}>
              Удалить
            </button>
          </Flex>
        </Popover.Content>
      </Popover.Root>
      <Alert
        title="Код отправлен повторно"
        open={alertOpen}
        onOpenChange={(open) => setAlertOpen(open)}
      />
      <Alert
        title="Вы хотите повлиять на администратора, для этого сообщите разработчику!"
        open={alertAdminOpen}
        onOpenChange={(open) => setAlertAdminOpen(open)}
      />
    </>
  );
};

export default DotsButton;
