import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Books from "./routes/Books";
import Profile from "./routes/Profile";
import AddBook from "./routes/addBook";
import { UserContext } from "../src/middleware/UserContext";
import { CustomBookContext } from "../src/middleware/CustomBookContext";
import { getAccount, IAccount } from "./backend/auth/getAccount";
import { useState, useMemo, Suspense } from "react";
import PrivateRoutes from "./middleware/PrivateRoutes";
import PublicRoutes from "./middleware/PublicRoutes";
import { Book } from "./components/BookCard";
import { listCustomBooks } from "./backend/database/listCustomBooks";

export default function App() {
  const [account, setAccount] = useState<IAccount>({
    name: "",
    $id: "",
    email: "",
  });

  const [customBooks, setCustomBooks] = useState<Book[]>([]);

  useMemo(() => {
    getAccount({ setAccount });
    listCustomBooks({ setCustomBooks: (e: Book[]) => setCustomBooks(e) });
  }, []);

  return (
    <Suspense>
      <UserContext.Provider value={{ account }}>
        <CustomBookContext.Provider value={{ customBooks }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<PublicRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/books" element={<Books />} />
                <Route path="/addBook" element={<AddBook />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CustomBookContext.Provider>
      </UserContext.Provider>
    </Suspense>
  );
}
