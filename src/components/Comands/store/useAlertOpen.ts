import { create } from "zustand";

interface IAlertOpen{
    alertOpen: boolean;
    setAlertOpen: (param: boolean) => void;
}
export const useAlertOpen = create<IAlertOpen>((set) => ({
    alertOpen: false,
    setAlertOpen: (param) => {
        set({alertOpen: param})
    }
}))