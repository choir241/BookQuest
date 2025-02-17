import { createContext } from "react";
import { Book} from "../components/BookCard";

type TCustomBookContext = {
  customBooks: Book[];
}

export const CustomBookContext = createContext<TCustomBookContext>({customBooks: []});
