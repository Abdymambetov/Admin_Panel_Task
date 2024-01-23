import { AlertDialog } from "@radix-ui/themes";
import { FC } from "react";
import Button from "../Button/Button";
import cls from "./Alert.module.css";

interface IAlert{
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
}

const Alert: FC<IAlert> = ({open, onOpenChange, title})=>{
    return(
        <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
        <AlertDialog.Content className={cls.alert}>
            <AlertDialog.Title className={cls.title}>{title}</AlertDialog.Title>
            <Button
            onClick={() => onOpenChange(false)}
            borderRadius={15}
            height={61}
            >
            Закрыть
            </Button>
        </AlertDialog.Content>
        </AlertDialog.Root>
    )
}
export default Alert