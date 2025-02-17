import { createContext } from "react";
import {IAccount} from "../backend/auth/getAccount";

type TUserContext = {
  account: IAccount;
}

export const UserContext = createContext<TUserContext>({account: {
  name: "",
  $id: "",
  email: "",
}});
