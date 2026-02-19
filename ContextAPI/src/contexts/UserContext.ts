import {createContext} from "react";

interface IContext {
    username: string;
    changeUsername: (username: string) => void;
}

export const UserContext = createContext<IContext>({
    username: '',
    changeUsername: () => {},
});