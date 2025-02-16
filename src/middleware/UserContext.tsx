import { createContext } from "react";

export const UserContext = createContext({account: {
  name: "",
  $id: "",
  email: "",
}});
